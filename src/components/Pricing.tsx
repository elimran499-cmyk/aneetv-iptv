import { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { PLANS_DATA } from '../data';
import { WHATSAPP_NUMBER } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';
import RetroTvIcon from './RetroTvIcon';

interface PricingProps {
  onSelectPlan: (planName: string, totalPrice: number) => void;
}

const VPN_ADDON_PRICE = 10;

// Metallic tier gradient matching each plan's name (silver / gold / platinum)
const PLAN_NAME_GRADIENTS: Record<string, string> = {
  'plan-3m': 'bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 dark:from-slate-300 dark:via-white dark:to-slate-400',
  'plan-12m': 'bg-gradient-to-r from-red-600 via-red-400 to-red-600 dark:from-red-400 dark:via-red-300 dark:to-red-500',
  'plan-24m': 'bg-gradient-to-r from-red-800 via-red-500 to-red-800 dark:from-red-600 dark:via-red-400 dark:to-red-700',
};

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [vpnByPlan, setVpnByPlan] = useState<Record<string, boolean>>({});

  const toggleVpn = (planId: string) =>
    setVpnByPlan((prev) => ({ ...prev, [planId]: !prev[planId] }));

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
            <Check className="h-3.5 w-3.5" />
            <span>Transparante Tarieven</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            Kies het Perfecte <span className="text-red-600 dark:text-red-400">AneeTV Pakket</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Geen verborgen installatiekosten, geen contracten, en we verlengen nooit stilzwijgend. Kies de periode die bij je past en geniet direct van premium entertainment.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12 max-w-5xl mx-auto">
          {PLANS_DATA.map((plan) => {
            const vpn = vpnByPlan[plan.id] ?? false;
            const computedPrice = Math.round((plan.price + (vpn ? VPN_ADDON_PRICE : 0)) * 100) / 100;
            const planLabel = `${plan.name}${vpn ? ' + VPN' : ''}`;
            const whatsappOrderMessage = `Hallo! Ik wil graag dit pakket bestellen:\n\nPakket: ${plan.name}\nLooptijd: ${plan.durationMonths} ${plan.durationMonths === 1 ? 'maand' : 'maanden'}\nSchermen: ${plan.screens}\nPremium VPN: ${vpn ? 'Ja' : 'Nee'}\nTotaalprijs: €${computedPrice}\n\nKunnen jullie me helpen met de bestelling?`;
            const whatsappOrderHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappOrderMessage)}`;

            return (
            <div
              key={plan.id}
              id={`plan-card-${plan.id}`}
              className={`relative flex flex-col justify-between rounded-2xl border bg-slate-50/40 dark:bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                plan.isPopular
                  ? 'border-red-500 shadow-xl shadow-red-500/10 scale-102 lg:scale-105 z-10'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 hover:dark:border-slate-700'
              }`}
            >
              {/* Top border decoration */}
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-red-500 to-red-400" />
              )}

              {/* Diagonal ribbon badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none overflow-hidden">
                  <div className="absolute top-[20px] right-[-40px] w-[170px] rotate-45 bg-gradient-to-r from-red-500 to-red-700 text-center py-1.5 shadow-md">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-950">{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="mb-4">
                <h3
                  className={`text-lg font-extrabold mb-1 uppercase tracking-wide bg-clip-text text-transparent ${
                    PLAN_NAME_GRADIENTS[plan.id] ?? 'bg-gradient-to-r from-slate-500 to-slate-500'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {plan.durationMonths} {plan.durationMonths === 1 ? 'maand' : 'maanden'} · {plan.screens} {plan.screens === 1 ? 'Scherm' : 'Schermen'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {Array.from({ length: plan.screens }).map((_, deviceIdx) => (
                    <span key={deviceIdx}>
                      <RetroTvIcon className="h-10 w-10 text-red-600 dark:text-red-400" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Price — shown at the top of the card */}
              <div className="mb-4">
                <div className="flex items-baseline flex-wrap gap-x-2">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">€{computedPrice}</span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">/ {plan.durationMonths} {plan.durationMonths === 1 ? 'maand' : 'maanden'}</span>
                </div>
                {plan.originalPrice && !vpn && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 line-through">€{plan.originalPrice}</span>
                  </div>
                )}
                {vpn && (
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    incl. Premium VPN
                  </p>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <Check className="h-3.5 w-3.5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
                {vpn && (
                  <li className="flex items-start space-x-2.5 text-xs text-red-700 dark:text-red-300 font-semibold">
                    <Check className="h-3.5 w-3.5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">Premium VPN Extra Inbegrepen</span>
                  </li>
                )}
              </ul>

              {/* Customization: VPN */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2 bg-slate-50/60 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex-shrink-0 p-1.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Premium VPN <span className="text-slate-400 dark:text-slate-500 font-semibold">· +€{VPN_ADDON_PRICE},00</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={vpn}
                    onClick={() => toggleVpn(plan.id)}
                    id={`plan-${plan.id}-vpn-toggle`}
                    className={`relative flex-shrink-0 w-[38px] h-[22px] rounded-full transition-colors cursor-pointer ${
                      vpn ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-[18px] w-[18px] rounded-full bg-white shadow-md transition-transform ${
                        vpn ? 'translate-x-[16px]' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Order CTA - opens WhatsApp directly with the pack pre-filled */}
              <a
                href={whatsappOrderHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSelectPlan(planLabel, computedPrice)}
                id={`order-btn-${plan.id}`}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-lg shadow-red-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 hover:dark:bg-slate-700 hover:text-slate-900 hover:dark:text-white border border-slate-300/80 dark:border-slate-700/80'
                }`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Bestel via WhatsApp</span>
              </a>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
