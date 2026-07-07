import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Monitor, Smartphone, Cpu, CheckCircle2, ChevronDown, ChevronUp, AlertTriangle, PlayCircle, HelpCircle } from 'lucide-react';
import { DEVICES_GUIDES } from '../data';

export default function SetupGuide() {
  const [activeTab, setActiveTab] = useState(DEVICES_GUIDES[0].id);
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({});
  const [activeTroubleshoot, setActiveTroubleshoot] = useState<number | null>(null);

  const activeGuide = DEVICES_GUIDES.find(g => g.id === activeTab) || DEVICES_GUIDES[0];

  const handleStepToggle = (stepIndex: number) => {
    const key = `${activeTab}-${stepIndex}`;
    setCompletedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="h-5 w-5" />;
      case 'Monitor':
        return <Monitor className="h-5 w-5" />;
      case 'Smartphone':
        return <Smartphone className="h-5 w-5" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5" />;
      default:
        return <Tv className="h-5 w-5" />;
    }
  };

  const troubleshootingQuestions = [
    {
      q: "Mijn M3U-afspeellijst laadt niet in de app. Wat kan ik doen?",
      a: "Dit is meestal te wijten aan een typefout in de URL. M3U-links zijn hoofdlettergevoelig en mogen geen spaties bevatten. Kopieer en plak de link rechtstreeks vanuit onze e-mail om invoerfouten te voorkomen. Controleer ook of uw internetverbinding actief is."
    },
    {
      q: "Ik krijg de foutmelding 'Ontwikkelaarsopties ontbreken' op mijn Firestick. Hoe los ik dit op?",
      a: "Amazon heeft de ontwikkelaarsopties verborgen in recente updates. Om dit te herstellen, gaat u naar Instellingen > Mijn Fire TV > Info. Klik exact 7 keer op de naam van uw apparaat (bijv. 'Fire TV Stick 4K'). U ziet een melding 'U bent nu een ontwikkelaar'. Ga terug en de Ontwikkelaarsopties zijn weer zichtbaar!"
    },
    {
      q: "Kan ik mijn abonnement delen met een vriend?",
      a: "Een standaard abonnement is bedoeld voor één huishouden. Indien de servers detecteren dat er vanaf twee verschillende IP-adressen tegelijkertijd gestreamd wordt, kan uw account automatisch tijdelijk geblokkeerd worden wegens misbruik. Bestel een extra verbinding als u de lijn wilt delen."
    }
  ];

  return (
    <section id="setup" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
            <Cpu className="h-3.5 w-3.5" />
            <span>Stap-voor-Stap Handleidingen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Eenvoudige Apparaat <span className="text-red-600 dark:text-red-400">Installatie</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Het instellen van AneeTV op je favoriete apparaat is binnen 5 minuten gepiept. Selecteer hieronder je apparaat en volg de interactieve stappen.
          </p>
        </div>

        {/* Device tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-slate-50 dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800">
          {DEVICES_GUIDES.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setActiveTab(guide.id)}
              id={`device-tab-${guide.id}`}
              className={`flex items-center space-x-2.5 px-4.5 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === guide.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/15'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 hover:dark:text-slate-200 hover:bg-slate-50/50 hover:dark:bg-slate-900/50'
              }`}
            >
              {getIcon(guide.iconName)}
              <span>{guide.name}</span>
            </button>
          ))}
        </div>

        {/* Stepper Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Stepper */}
          <div className="lg:col-span-8 bg-white/40 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8" id="stepper-container">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{activeGuide.name} Gids</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{activeGuide.description}</p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-6 before:w-[1px] before:bg-slate-100 dark:bg-slate-800">
              {activeGuide.steps.map((step, idx) => {
                const isStepCompleted = completedSteps[`${activeTab}-${idx}`];
                return (
                  <div key={idx} className="relative flex items-start space-x-4 group">
                    {/* Stepper circle with indicator */}
                    <button
                      onClick={() => handleStepToggle(idx)}
                      id={`step-indicator-${activeTab}-${idx}`}
                      className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all duration-300 z-10 cursor-pointer ${
                        isStepCompleted
                          ? 'bg-red-500 border-red-500 text-slate-950 shadow-lg shadow-red-500/20'
                          : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:border-slate-300 group-hover:dark:border-slate-700'
                      }`}
                      title={isStepCompleted ? "Markeer als onvoltooid" : "Markeer als voltooid"}
                    >
                      {isStepCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-slate-950 fill-none stroke-[2.5]" />
                      ) : (
                        <span className="font-mono text-xs font-black">{idx + 1}</span>
                      )}
                    </button>

                    {/* Content text */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-start justify-between">
                        <h4 className={`font-bold text-sm transition-colors ${isStepCompleted ? 'text-slate-500 dark:text-slate-400 line-through font-medium' : 'text-slate-800 dark:text-slate-100'}`}>
                          {step.title}
                        </h4>
                        
                        <button
                          onClick={() => handleStepToggle(idx)}
                          id={`step-check-${activeTab}-${idx}`}
                          className="text-[10px] font-bold px-2 py-1 rounded bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 hover:dark:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 hover:dark:text-slate-200 transition-all cursor-pointer"
                        >
                          {isStepCompleted ? 'Voltooid ✓' : 'Gereed?'}
                        </button>
                      </div>
                      <p className={`text-xs leading-relaxed mt-1 transition-colors ${isStepCompleted ? 'text-slate-500 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick tips & warnings */}
          <div className="lg:col-span-4 bg-white/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-lg relative">
            <div className="flex items-center space-x-2 text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-4">
              <AlertTriangle className="h-4.5 w-4.5 text-red-500" />
              <span>Belangrijke Tips</span>
            </div>
            
            <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400">
              <li className="space-y-1">
                <strong className="text-slate-700 dark:text-slate-200 block font-semibold">Bekabeld Internet Aanbevolen:</strong>
                <p className="leading-relaxed">
                  Gebruik waar mogelijk een Ethernet-kabel op uw TV of TV-box. Wi-Fi-verstoringen kunnen leiden tot lichte haperingen, zelfs met snelle internetverbindingen.
                </p>
              </li>
              <li className="space-y-1 border-t border-slate-100 dark:border-slate-900 pt-3">
                <strong className="text-slate-700 dark:text-slate-200 block font-semibold">Gebruik Xtream Codes API:</strong>
                <p className="leading-relaxed">
                  Kies in IPTV apps altijd de inlogmethode 'Xtream Codes API' in plaats van 'M3U Link'. Dit is vele malen sneller, laadt de zenderlogo's direct in en zorgt voor automatische EPG-synchronisatie.
                </p>
              </li>
              <li className="space-y-1 border-t border-slate-100 dark:border-slate-900 pt-3">
                <strong className="text-slate-700 dark:text-slate-200 block font-semibold">Heb je hulp nodig?</strong>
                <p className="leading-relaxed">
                  Kom je er toch niet helemaal uit met de installatie? Onze experts staan 24/7 klaar om je op afstand te begeleiden via e-mail of WhatsApp-support.
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Troubleshooting accordions */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto" id="installation-troubleshooting">
          <div className="flex items-center space-x-2 text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-6">
            <HelpCircle className="h-4.5 w-4.5 text-red-600 dark:text-red-400" />
            <span>Installatie Problemen Oplossen</span>
          </div>

          <div className="space-y-3">
            {troubleshootingQuestions.map((item, idx) => {
              const isOpen = activeTroubleshoot === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-950/20 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveTroubleshoot(isOpen ? null : idx)}
                    id={`troubleshoot-toggle-${idx}`}
                    className="w-full flex items-center justify-between p-4.5 text-left text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 hover:dark:text-white transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
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
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
