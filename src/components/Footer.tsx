import { Tv, Shield, Lock, CheckCircle2, CreditCard, Wallet, Bitcoin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

function paymentWhatsappHref(methodName: string): string {
  const message = `Hallo! Ik wil graag betalen via ${methodName}. Kunnen jullie me helpen met de bestelling?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100 dark:border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button
              className="flex items-center space-x-2 cursor-pointer group inline-flex"
              onClick={() => onNavigate('hero')}
              id="footer-logo"
              aria-label="Ga naar de homepagina"
            >
              <div className="p-2 bg-gradient-to-tr from-red-500 to-red-400 rounded-xl">
                <Tv className="h-5 w-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                Anee<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">TV</span>
              </span>
            </button>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              AneeTV is de nummer #1 premium IPTV aanbieder in de Benelux en heel Europa. Wij leveren stabiele televisiediensten van de hoogste kwaliteit door gebruik te maken van lokale high-speed CDN-caches.
            </p>

            {/* Certifications / Trust seals */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                <Lock className="h-3 w-3 text-red-600 dark:text-red-400" />
                <span>SSL Beveiligd</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                <Shield className="h-3 w-3 text-red-600 dark:text-red-400" />
                <span>99.9% Beschikbaarheid</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                <CheckCircle2 className="h-3 w-3 text-red-600 dark:text-red-400" />
                <span>Anti-Buffer v3.2</span>
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-widest">Snelle Links</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => onNavigate('hero')} id="footer-link-home" className="hover:text-slate-900 hover:dark:text-white transition-colors cursor-pointer">
                  Startpagina (Home)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} id="footer-link-pricing" className="hover:text-slate-900 hover:dark:text-white transition-colors cursor-pointer">
                  Abonnementen & Rekenmachine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('setup')} id="footer-link-setup" className="hover:text-slate-900 hover:dark:text-white transition-colors cursor-pointer">
                  Installatie Handleidingen
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('speedtest')} id="footer-link-speedtest" className="hover:text-slate-900 hover:dark:text-white transition-colors cursor-pointer">
                  Internetsnelheidstest
                </button>
              </li>
            </ul>
          </div>

          {/* Payment Pill badges */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-widest">Veilige Betaalmethoden</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We verwerken alle betalingen gecodeerd en vertrouwelijk via WhatsApp. Geen automatische incasso of abonnementsverlenging. Klik op een betaalmethode om direct te chatten.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={paymentWhatsappHref('Bancontact')}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-pay-bancontact"
                className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-[10px] font-black tracking-wider shadow hover:border-[#DC2626]/50 hover:text-[#B91C1C] hover:dark:text-[#DC2626] transition-colors cursor-pointer"
              >
                Bancontact
              </a>
              <a
                href={paymentWhatsappHref('Visa / Mastercard')}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-pay-card"
                className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-[10px] font-bold tracking-wider shadow flex items-center gap-1 hover:border-[#DC2626]/50 hover:text-[#B91C1C] hover:dark:text-[#DC2626] transition-colors cursor-pointer"
              >
                <CreditCard className="h-3 w-3" /> Visa & Mastercard
              </a>
              <a
                href={paymentWhatsappHref('PayPal')}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-pay-paypal"
                className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-[10px] font-bold tracking-wider shadow flex items-center gap-1 hover:border-[#DC2626]/50 hover:text-[#B91C1C] hover:dark:text-[#DC2626] transition-colors cursor-pointer"
              >
                <Wallet className="h-3 w-3" /> PayPal
              </a>
              <a
                href={paymentWhatsappHref('Bitcoin / Crypto')}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-pay-crypto"
                className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-800 text-[10px] font-bold tracking-wider shadow flex items-center gap-1 hover:border-[#DC2626]/50 hover:dark:text-[#DC2626] transition-colors cursor-pointer"
              >
                <Bitcoin className="h-3 w-3" /> Bitcoin & Crypto
              </a>
            </div>
          </div>

        </div>

        {/* Bottom footer text */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} AneeTV.nl. Alle rechten voorbehouden.</p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-700 hover:dark:text-slate-200 transition-colors cursor-pointer">Algemene Voorwaarden</span>
            <span className="hover:text-slate-700 hover:dark:text-slate-200 transition-colors cursor-pointer">Privacy Beleid</span>
            <span className="hover:text-slate-700 hover:dark:text-slate-200 transition-colors cursor-pointer">Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
