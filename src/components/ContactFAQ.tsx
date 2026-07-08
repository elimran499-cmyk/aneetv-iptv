import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Headphones, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { FAQS_DATA } from '../data';
import { WHATSAPP_NUMBER } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactFAQ() {
  // FAQ accordion states
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<'all' | 'general' | 'technical' | 'billing'>('all');

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter(f => faqCategory === 'all' || f.category === faqCategory);
  }, [faqCategory]);

  // FAQPage structured data for search engines (uses the full FAQ list, not the filtered view)
  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }), []);

  const whatsappMessage = 'Hallo! Ik heb een vraag over AneeTV.';
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
            <Headphones className="h-3.5 w-3.5" />
            <span>Klantenservice & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Heb je een vraag? Wij staan voor <span className="text-red-600 dark:text-red-400">je klaar.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Bekijk hieronder de antwoorden op onze meest gestelde vragen, of neem rechtstreeks contact op met ons supportteam om direct je IPTV-verbinding op te starten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion Module (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-red-600 dark:text-red-400" />
                Veelgestelde Vragen
              </h3>

              {/* FAQ categories selection */}
              <div className="flex flex-wrap gap-1.5 bg-slate-50 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                {[
                  { id: 'all', label: 'Alle' },
                  { id: 'general', label: 'Algemeen' },
                  { id: 'technical', label: 'Technisch' },
                  { id: 'billing', label: 'Betaling' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setFaqCategory(cat.id as any);
                      setActiveFaq(0); // Reset open accordion index to first item of new category
                    }}
                    id={`faq-cat-btn-${cat.id}`}
                    className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-all ${
                      faqCategory === cat.id
                        ? 'bg-red-500 text-white'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 hover:dark:text-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-3" id="faq-accordion">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 rounded-xl overflow-hidden transition-all hover:border-slate-300/80 hover:dark:border-slate-700/80"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      id={`faq-item-toggle-${idx}`}
                      className="w-full flex items-center justify-between p-4.5 text-left text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 hover:dark:text-white transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="h-4 w-4 text-slate-500 dark:text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400" />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4.5 pb-4.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100/60 dark:border-slate-900/60 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WhatsApp Contact CTA (Right) */}
          <div className="lg:col-span-5" id="contact">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
              {/* Subtle top indicator */}
              <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-60" />
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#DC2626]/10 border border-[#DC2626]/30">
                  <WhatsAppIcon className="h-6 w-6 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Vragen? We Helpen Je Graag</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Snelste manier om ons te bereiken</p>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Twijfel je nog, heb je hulp nodig bij de installatie, of loop je tegen iets technisch aan? Stel je vraag rechtstreeks aan ons supportteam via WhatsApp — een pakket bestel je direct bij de knop "Bestel via WhatsApp" bij je gekozen abonnement.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-contact-btn"
                className="w-full py-4.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#DC2626]/20 hover:scale-[1.01] cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat Nu via WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  <Clock className="h-3.5 w-3.5" /> Reactie binnen 2-5 min
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  <ShieldCheck className="h-3.5 w-3.5" /> 24/7 Beschikbaar
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
