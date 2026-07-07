import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../constants';

interface FloatingWhatsAppProps {
  selectedPlanName?: string | null;
}

export default function FloatingWhatsApp({ selectedPlanName }: FloatingWhatsAppProps) {
  const message = selectedPlanName
    ? `Hallo! Ik heb een vraag over het pakket: ${selectedPlanName}.`
    : 'Hallo! Ik heb een vraag over AneeTV IPTV.';
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-btn"
      aria-label="Chat direct via WhatsApp"
      title="Chat direct via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] shadow-lg shadow-[#DC2626]/30 hover:scale-105 transition-all duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#DC2626] animate-ping opacity-30" />
      <WhatsAppIcon className="h-7 w-7 text-white relative" />
    </a>
  );
}
