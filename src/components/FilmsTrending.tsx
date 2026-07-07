import { useState } from 'react';
import { Rocket, Flame, Clapperboard, Laugh, Music, Ghost, Siren, Eye, Star, TrendingUp } from 'lucide-react';
import { TRENDING_NL } from '../data';

// Genre -> { icon, gradient } so each poster feels tailored rather than randomly assigned.
// No real poster art is used (copyrighted promotional material); these are cinematic,
// photo-like placeholders: layered lighting + vignette + grain, staying within the red/black/white theme.
const GENRE_STYLE: Record<string, { icon: typeof Rocket; gradient: string }> = {
  'Sci-Fi': { icon: Rocket, gradient: 'from-red-900 via-slate-900 to-black' },
  Actie: { icon: Flame, gradient: 'from-red-600 via-red-800 to-black' },
  Drama: { icon: Clapperboard, gradient: 'from-slate-800 via-red-950 to-black' },
  Komedie: { icon: Laugh, gradient: 'from-red-500 via-red-700 to-slate-900' },
  Musical: { icon: Music, gradient: 'from-red-600 via-red-900 to-slate-950' },
  'Horror-Komedie': { icon: Ghost, gradient: 'from-slate-950 via-red-950 to-black' },
  Misdaad: { icon: Siren, gradient: 'from-red-800 via-slate-900 to-black' },
  Thriller: { icon: Eye, gradient: 'from-slate-900 via-red-900 to-black' },
};

const DEFAULT_STYLE = { icon: Clapperboard, gradient: 'from-red-700 via-red-900 to-black' };

export default function FilmsTrending() {
  const [failedPosters, setFailedPosters] = useState<Set<number>>(new Set());

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Nu Trending in Nederland</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            Populaire <span className="text-red-600 dark:text-red-400">Films & Series</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Een selectie van veelbekeken Nederlandse films en series, inbegrepen in de VOD-bibliotheek van elk AneeTV-abonnement.
          </p>
        </div>

        {/* Auto-scrolling film & series row */}
        <div
          className="relative w-full overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)' }}
        >
          <div className="flex gap-5 w-max animate-marquee" style={{ animationDuration: '140s' }}>
          {[...TRENDING_NL, ...TRENDING_NL].map((film, listIdx) => {
            const style = GENRE_STYLE[film.genre] ?? DEFAULT_STYLE;
            const GenreIcon = style.icon;
            const showPhoto = film.posterUrl && !failedPosters.has(listIdx);
            return (
              <div
                key={`${film.title}-${listIdx}`}
                id={`film-card-${listIdx}`}
                className="group flex-shrink-0 w-40 sm:w-48"
              >
                <div
                  className={`relative aspect-[2/3] rounded-2xl bg-gradient-to-br ${style.gradient} border border-slate-200 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 group-hover:scale-[1.02] transition-all duration-300 overflow-hidden flex items-center justify-center mb-3`}
                >
                  {showPhoto ? (
                    <img
                      src={film.posterUrl}
                      alt={film.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      onError={() => setFailedPosters((prev) => new Set(prev).add(listIdx))}
                    />
                  ) : (
                    <>
                      {/* Spotlight glow (top) for a lit, photo-like feel */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                      {/* Vignette */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />
                      {/* Subtle film-grain texture */}
                      <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, transparent 1px, transparent 2px, #fff 3px)',
                        }}
                      />
                      <GenreIcon className="h-12 w-12 text-white/70 relative z-[1]" strokeWidth={1.5} />
                    </>
                  )}

                  {/* Bottom gradient so badges stay legible over a bright photo */}
                  {showPhoto && (
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                  )}

                  {film.isDutch && (
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-white/90 text-[9px] font-black tracking-wider text-red-700 z-10">
                      NL
                    </span>
                  )}

                  <span className="absolute bottom-2 left-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-sm z-10">
                    <Star className="h-3 w-3 text-red-400 fill-red-400" />
                    <span className="text-[10px] font-bold text-white">{film.rating.toFixed(1)}</span>
                  </span>
                </div>

                {/* Meta */}
                <span className="inline-block text-[9px] font-black uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
                  {film.type}
                </span>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-tight mb-1 line-clamp-2 min-h-[2rem]">
                  {film.title}
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {film.genre} · {film.year}
                </p>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
