import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// Illustrated (not photographic) placeholder avatars, seeded per-name so each
// person gets a consistent, distinct avatar. Falls back to initials on error.
function avatarUrl(name: string): string {
  return `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(name)}&backgroundColor=fecaca,fee2e2&size=64`;
}

export default function Testimonials() {
  const [failedAvatars, setFailedAvatars] = useState<Set<number>>(new Set());

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs font-semibold">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>4.9/5 — 2.400+ Beoordelingen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            Wat Onze <span className="text-red-600 dark:text-red-400">Klanten Zeggen</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Duizenden tevreden kijkers in Nederland en België vertrouwen dagelijks op AneeTV voor stabiele, haarscherpe streaming.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <div
              key={idx}
              id={`testimonial-${idx}`}
              className="relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:dark:border-slate-700 hover:shadow-md"
            >
              <Quote className="h-6 w-6 text-red-500/30 dark:text-red-400/20 mb-2" />

              {/* Star rating */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className={`h-3.5 w-3.5 ${
                      starIdx < testimonial.rating
                        ? 'text-red-500 fill-red-500'
                        : 'text-slate-200 dark:text-slate-700 fill-slate-200 dark:fill-slate-700'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                {failedAvatars.has(idx) ? (
                  <div className="flex-shrink-0 h-9 w-9 rounded-full bg-gradient-to-tr from-red-500 to-red-400 flex items-center justify-center text-[11px] font-bold text-slate-950">
                    {getInitials(testimonial.name)}
                  </div>
                ) : (
                  <img
                    src={avatarUrl(testimonial.name)}
                    alt={testimonial.name}
                    className="flex-shrink-0 h-9 w-9 rounded-full border border-red-200 dark:border-red-900/40"
                    loading="lazy"
                    onError={() => setFailedAvatars((prev) => new Set(prev).add(idx))}
                  />
                )}
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{testimonial.name}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {testimonial.location} · {testimonial.plan}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
