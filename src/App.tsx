import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChannelLogos from './components/ChannelLogos';
import FilmsTrending from './components/FilmsTrending';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import SetupGuide from './components/SetupGuide';
import Diagnostics from './components/Diagnostics';
import ContactFAQ from './components/ContactFAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';

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

  // Intersection Observer to update Navbar active indicator on scroll
  useEffect(() => {
    const sections = ['hero', 'pricing', 'setup', 'speedtest', 'faq'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 selection:bg-red-500 selection:text-white antialiased font-sans">
      {/* Sticky Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Section Content blocks */}
      <main className="relative">
        <Hero onNavigate={handleNavigate} />
        <ChannelLogos />
        <AboutUs />
        <FilmsTrending />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Testimonials />
        <SetupGuide />
        <Diagnostics />
        <ContactFAQ />
      </main>

      {/* Footer copyright, navigations & security seals */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent floating support access + cookie consent */}
      <FloatingWhatsApp selectedPlanName={selectedPlanName} />
      <CookieConsent />
    </div>
  );
}
