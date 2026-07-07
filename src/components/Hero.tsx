import { motion } from 'motion/react';
import { ChevronRight, Activity, Tv, Star, Users, Film } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const STATS = [
  { icon: Tv, value: '69.000+', label: 'Wereldwijde Zenders' },
  { icon: Film, value: '170.000+', label: 'Films & Series' },
  { icon: Activity, value: '99.9%', label: 'Serverbeschikbaarheid' },
  { icon: Users, value: '18.420+', label: 'Actieve Abonnees' },
];

const FEATURES = ['Anti-Buffer v3.2', '7 Dagen Garantie', 'Internationale Zenders', '4K Ultra HD'];

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white dark:bg-slate-950">
      {/* Soft background glow — no grid pattern, kept minimal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-red-100/60 dark:from-red-950/20 via-red-50/20 dark:via-red-950/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400 tracking-wide"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          PREMIUM IPTV NEDERLAND & BELGIË
        </motion.div>

        {/* Headline — dedicated display font (Plus Jakarta Sans) for a distinct, professional look */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-hero mt-5 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
        >
          Sluit je aan bij de toekomst van{' '}
          <span className="text-red-600 dark:text-red-500">televisie</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Stream meer dan <strong className="text-slate-700 dark:text-slate-200">69.000 zenders</strong> en{' '}
          <strong className="text-slate-700 dark:text-slate-200">170.000+ films & series</strong> in haarscherpe 4K, zonder kabels of schotels.
        </motion.p>

        {/* Primary CTA + subtle secondary link, instead of two equal-weight buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center"
        >
          <button
            onClick={() => onNavigate('pricing')}
            id="hero-plans-btn"
            className="flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:scale-[1.02]"
          >
            <span>Bekijk Abonnementen</span>
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            onClick={() => onNavigate('faq')}
            id="hero-contact-btn"
            className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-300 font-semibold text-base hover:text-red-600 hover:dark:text-red-400 transition-colors duration-200"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 text-[#DC2626]" />
            <span>Chat direct via WhatsApp</span>
          </button>
        </motion.div>

        {/* Rating + active status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-400 dark:text-slate-500"
        >
          <span className="flex items-center gap-1.5 font-semibold text-slate-600 dark:text-slate-300">
            <Star className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            4.9/5 — 2.400+ beoordelingen
          </span>
          <span className="hidden sm:inline">·</span>
          <span>18.420+ actieve abonnees in Nederland & België</span>
        </motion.div>

        {/* Stat row — flat, no card chrome, thin dividers only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-2xl sm:max-w-none mx-auto grid grid-cols-2 sm:flex sm:flex-nowrap sm:items-stretch sm:justify-center divide-y divide-x sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-4 sm:py-0 px-4 sm:px-8">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight whitespace-nowrap">
                <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 text-center">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature line — plain text with dot separators, no boxed chips */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-xs text-slate-400 dark:text-slate-500 flex flex-wrap items-center justify-center gap-x-2"
        >
          {FEATURES.map((feature, idx) => (
            <span key={feature} className="flex items-center gap-2">
              {idx > 0 && <span className="text-slate-300 dark:text-slate-700">•</span>}
              {feature}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
