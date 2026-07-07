import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'aneetv-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'essential-only') => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-banner"
      role="region"
      aria-label="Cookiemelding"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-shrink-0 p-2.5 rounded-xl bg-red-500/10 border border-red-500/30">
          <Cookie className="h-5 w-5 text-red-600 dark:text-red-400" />
        </div>

        <p className="flex-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Wij gebruiken cookies om je voorkeuren (zoals lichte/donkere modus) te onthouden en onze website te analyseren en te verbeteren. Door op "Accepteren" te klikken ga je akkoord met ons gebruik van cookies.
        </p>

        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={() => handleConsent('essential-only')}
            id="cookie-consent-essential-btn"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 hover:dark:bg-slate-800 transition-colors cursor-pointer"
          >
            Alleen Noodzakelijk
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            id="cookie-consent-accept-btn"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 shadow-md shadow-red-500/20 transition-all cursor-pointer"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
