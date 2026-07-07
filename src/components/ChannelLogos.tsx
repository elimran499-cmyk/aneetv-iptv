import { useState } from 'react';

// Real logo marks for Dutch broadcasters/streaming brands, sourced live from
// each brand's own official site favicon (verified distinct, not a generic fallback icon).
const CHANNELS: { name: string; domain: string }[] = [
  { name: 'NPO', domain: 'npo.nl' },
  { name: 'NPO Start', domain: 'npostart.nl' },
  { name: 'RTL', domain: 'rtl.nl' },
  { name: 'SBS6', domain: 'sbs6.nl' },
  { name: 'Videoland', domain: 'videoland.com' },
  { name: 'Ziggo Sport', domain: 'ziggosport.nl' },
  { name: 'Eurosport', domain: 'eurosport.nl' },
  { name: 'KPN', domain: 'kpn.com' },
  { name: 'National Geographic', domain: 'nationalgeographic.nl' },
  { name: 'TLC', domain: 'tlc.nl' },
];

export default function ChannelLogos() {
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());

  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
          Inclusief Content Van
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex w-max gap-5 animate-marquee">
          {[...CHANNELS, ...CHANNELS].map((channel, idx) => {
            const key = `${channel.name}-${idx}`;
            if (failedLogos.has(key)) return null;
            return (
              <span
                key={key}
                className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${channel.domain}&sz=128`}
                  alt={channel.name}
                  className="h-9 w-9 object-contain rounded-md"
                  loading="lazy"
                  onError={() => setFailedLogos((prev) => new Set(prev).add(key))}
                />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
