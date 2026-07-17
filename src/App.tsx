import { useState, useEffect, lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChannelLogos from './components/ChannelLogos';

// Below-the-fold sections are code-split so they don't weigh down the initial
// bundle. They download in parallel after first paint and stream in as ready.
const AboutUs = lazy(() => import('./components/AboutUs'));
const FilmsTrending = lazy(() => import('./components/FilmsTrending'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const SetupGuide = lazy(() => import('./components/SetupGuide'));
const Diagnostics = lazy(() => import('./components/Diagnostics'));
const ContactFAQ = lazy(() => import('./components/ContactFAQ'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Track the most recently selected plan so the floating WhatsApp bubble can reference it.
  // Ordering itself happens instantly via the pack's own "Bestel via WhatsApp" button.
  const handleSelectPlan = (planName: string) => {
    setSelectedPlanName(planName);
  };

  // Update the Navbar active indicator on scroll. Because several of these
  // sections are lazy-loaded, they aren't in the DOM when this effect first
  // runs — so we (re)attach the observer as sections mount, via a
  // MutationObserver that disconnects itself once every section is found.
  useEffect(() => {
    const sectionIds = ['hero', 'pricing', 'setup', 'speedtest', 'faq'];
    const observed = new Set<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const mo = new MutationObserver(() => attach());

    const attach = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !observed.has(el)) {
          io.observe(el);
          observed.add(el);
        }
      });
      if (observed.size === sectionIds.length) {
        mo.disconnect();
      }
    };

    attach(); // observe whatever is already in the DOM (hero, etc.)
    if (observed.size < sectionIds.length) {
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 selection:bg-red-500 selection:text-white antialiased font-sans">
      {/* Sticky Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Section Content blocks */}
      <main className="relative">
        <Hero onNavigate={handleNavigate} />
        <ChannelLogos />
        <Suspense fallback={null}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={null}>
          <FilmsTrending />
        </Suspense>
        <Suspense fallback={null}>
          <Pricing onSelectPlan={handleSelectPlan} />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <SetupGuide />
        </Suspense>
        <Suspense fallback={null}>
          <Diagnostics />
        </Suspense>
        <Suspense fallback={null}>
          <ContactFAQ />
        </Suspense>
      </main>

      {/* Footer copyright, navigations & security seals */}
      <Suspense fallback={null}>
        <Footer onNavigate={handleNavigate} />
      </Suspense>

      {/* Persistent floating support access + cookie consent */}
      <Suspense fallback={null}>
        <FloatingWhatsApp selectedPlanName={selectedPlanName} />
        <CookieConsent />
      </Suspense>
    </div>
    </LazyMotion>
  );
}
