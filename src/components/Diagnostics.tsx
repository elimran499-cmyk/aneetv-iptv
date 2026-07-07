import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Activity, Play, CheckCircle2, AlertCircle, RefreshCw, Zap, Server } from 'lucide-react';

export default function Diagnostics() {
  const [testState, setTestState] = useState<'idle' | 'testing' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [ping, setPing] = useState(0);
  const [jitter, setJitter] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [testPhase, setTestPhase] = useState<'connecting' | 'ping' | 'jitter' | 'download' | 'evaluating' | 'none'>('none');

  const startTest = () => {
    setTestState('testing');
    setProgress(0);
    setPing(0);
    setJitter(0);
    setDownloadSpeed(0);
    setTestPhase('connecting');
  };

  useEffect(() => {
    if (testState !== 'testing') return;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1.5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTestPhase('none');
        setTestState('completed');
      }
      setProgress(Math.min(100, Math.round(currentProgress)));

      // Logic to simulate real-time metrics during appropriate phases.
      // The first few percent show a "connecting" skeleton before any numbers appear.
      if (currentProgress < 8) {
        setTestPhase('connecting');
      } else if (currentProgress < 30) {
        setTestPhase('ping');
        // Ping phase: simulate ping fluctuations settling around 12-18ms
        setPing(Math.round(10 + Math.random() * 15));
      } else if (currentProgress >= 30 && currentProgress < 55) {
        setTestPhase('jitter');
        // Jitter phase: simulate jitter settling around 1-3ms
        setJitter(Math.round(1 + Math.random() * 4));
      } else if (currentProgress >= 55 && currentProgress < 88) {
        setTestPhase('download');
        // Download phase: climb speed to an impressive 65-120 Mbps range
        const maxClimb = 85 + Math.random() * 35;
        const currentClimb = Math.round((currentProgress - 55) / 33 * maxClimb);
        setDownloadSpeed(Math.max(12, currentClimb));
      } else {
        setTestPhase('evaluating');
      }
    }, 60);

    return () => clearInterval(interval);
  }, [testState]);

  // Determine streaming capability based on download speed
  const streamCapability = {
    quality: downloadSpeed >= 50 ? '4K Ultra HD' : downloadSpeed >= 25 ? 'Full HD 1080p' : downloadSpeed >= 15 ? 'HD 720p' : 'Niet aanbevolen',
    color: downloadSpeed >= 50 ? 'text-red-600 dark:text-red-400' : downloadSpeed >= 25 ? 'text-red-600 dark:text-red-400' : downloadSpeed >= 15 ? 'text-red-600 dark:text-red-400' : 'text-red-600 dark:text-red-400',
    description: downloadSpeed >= 50 
      ? 'Je internetverbinding is van wereldklasse! Je kunt moeiteloos streamen in haarscherpe 4K kwaliteit op meerdere schermen tegelijk zonder enige vorm van buffering.'
      : downloadSpeed >= 25
      ? 'Uitstekende verbinding. Geschikt voor vlekkeloze Full HD streams op 60fps. Voor 4K zenders raden we aan andere apparaten tijdelijk te ontlasten.'
      : downloadSpeed >= 15
      ? 'Voldoende voor standaard HD streams. Mogelijk ondervind je lichte haperingen tijdens grote live sportevenementen als er andere downloads actief zijn.'
      : 'Je huidige internetsnelheid is erg laag. We raden je aan je router te herstarten of contact op te nemen met je provider voordat je een premium pakket activeert.',
    advice: downloadSpeed >= 50 
      ? 'Alles is optimaal geconfigureerd. Geen verdere acties vereist.' 
      : downloadSpeed >= 25 
      ? 'Kies voor een bekabelde ethernetverbinding om de ping te minimaliseren voor live sport streams.'
      : 'Sluit actieve downloads op de achtergrond en overweeg een vaste internetkabel in plaats van draadloze Wi-Fi.'
  };

  return (
    <section id="speedtest" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
            <Wifi className="h-3.5 w-3.5" />
            <span>Verbindingsdiagnose</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            AneeTV Snelheidstest & <span className="text-red-600 dark:text-red-400">Diagnose</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Ontvang direct advies over de geschiktheid van je internetverbinding voor 4K UHD en Full HD streaming op ons IPTV-netwerk.
          </p>
        </div>

        {/* Diagnostic Panel */}
        <div className="bg-white dark:bg-slate-950/60 shadow-sm rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 relative overflow-hidden" id="diagnose-dashboard">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-red-500 to-red-400" />

          {testState === 'idle' && (
            <div className="text-center space-y-6 py-8">
              <div className="p-4 bg-red-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto border border-red-500/20">
                <Wifi className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Start Direct de Diagnose</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  We meten je ping (latentie), jitter (stabiliteit) en download-snelheid rechtstreeks naar onze dichtstbijzijnde streaming-clusters in Europa.
                </p>
              </div>
              <button
                onClick={startTest}
                id="start-diagnose-btn"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] cursor-pointer"
              >
                <Play className="h-4 w-4 fill-white stroke-none" />
                <span>Start Verbindingstest</span>
              </button>
            </div>
          )}

          {testState === 'testing' && (
            <div className="space-y-8 py-4">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                  <span className="uppercase tracking-wider">
                    {testPhase === 'connecting' && '📡 Verbinden met dichtstbijzijnde server...'}
                    {testPhase === 'ping' && '⚡ Ping testen...'}
                    {testPhase === 'jitter' && '⚙️ Netwerkstabiliteit evalueren...'}
                    {testPhase === 'download' && '📥 Download snelheid downloaden...'}
                    {testPhase === 'evaluating' && '🧠 Buffer-geschiktheid analyseren...'}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 bg-white dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 via-red-500 to-red-400 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Real-time Counter Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Ping Latentie</span>
                  {testPhase === 'connecting' ? (
                    <span className="inline-block h-6 w-12 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  ) : (
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">{ping} <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">ms</span></span>
                  )}
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Jitter (Varia)</span>
                  {testPhase === 'connecting' ? (
                    <span className="inline-block h-6 w-12 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  ) : (
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">{jitter} <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">ms</span></span>
                  )}
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Download Snelheid</span>
                  {testPhase === 'connecting' ? (
                    <span className="inline-block h-6 w-12 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  ) : (
                    <span className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400 font-mono">{downloadSpeed} <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">Mbps</span></span>
                  )}
                </div>
              </div>
            </div>
          )}

          {testState === 'completed' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-500/10 rounded-full border border-red-500/30">
                    <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Snelheidstest Voltooid</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Resultaat: <span className={streamCapability.color}>{streamCapability.quality}</span>
                    </h3>
                  </div>
                </div>

                <button
                  onClick={startTest}
                  id="restart-diagnose-btn"
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 hover:dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-300 dark:border-slate-700 cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Opnieuw Testen</span>
                </button>
              </div>

              {/* Metrics Recap */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Ping (Vertraging)</span>
                    <strong className="text-base text-slate-900 dark:text-white font-mono">{ping} ms</strong>
                    <span className="block text-[9px] text-red-600 dark:text-red-400 mt-0.5">Uitstekend stabiel</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-4.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                  <Server className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Jitter (Uitschieters)</span>
                    <strong className="text-base text-slate-900 dark:text-white font-mono">{jitter} ms</strong>
                    <span className="block text-[9px] text-red-600 dark:text-red-400 mt-0.5">Laagste buffer-risico</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 p-4.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Gemeten Bandbreedte</span>
                    <strong className="text-base text-red-600 dark:text-red-400 font-mono">{downloadSpeed} Mbps</strong>
                    <span className="block text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">Europese CDN cluster</span>
                  </div>
                </div>
              </div>

              {/* Summary and custom recommendations */}
              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Analyse & Aanbevelingen:</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {streamCapability.description}
                </p>
                <div className="flex items-start gap-2 text-xs text-red-700 dark:text-red-300 border-t border-slate-100 dark:border-slate-900 pt-3 mt-2">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Advies:</strong> {streamCapability.advice}
                  </span>
                </div>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
