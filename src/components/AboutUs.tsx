import { Users2, Target, HeartHandshake, Sparkles } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Betrouwbaarheid',
    description: 'Stabiele streams via lokale CDN-caches, 24/7 gemonitord op kwaliteit en uptime.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparantie',
    description: 'Geen verborgen kosten, geen stilzwijgende verlenging. Je weet vooraf precies wat je krijgt.',
  },
  {
    icon: Users2,
    title: 'Persoonlijke Service',
    description: 'Direct contact via WhatsApp met een echt supportteam, geen chatbots of wachtrijen.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Over AneeTV</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              Gemaakt door <span className="text-red-600 dark:text-red-400">kijkers, voor kijkers.</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              AneeTV is opgericht met één doel: premium televisie toegankelijk maken zonder dure kabelabonnementen of lange contracten. Wat begon als een klein team van streaming-enthousiastelingen in de Benelux is uitgegroeid tot een vertrouwde IPTV-service voor duizenden huishoudens in Nederland en België.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We investeren continu in onze server-infrastructuur en anti-buffer technologie, zodat jij je kunt focussen op waar het echt om gaat: genieten van je favoriete zenders, films en series.
            </p>
          </div>

          {/* Values */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-1 gap-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"
              >
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-red-500/10 border border-red-500/30">
                  <value.icon className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{value.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
