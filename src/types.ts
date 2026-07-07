export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  durationMonths: number;
  screens: number;
  description: string;
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface GuideStep {
  title: string;
  description: string;
}

export interface DeviceGuide {
  id: string;
  name: string;
  iconName: string;
  description: string;
  steps: GuideStep[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'billing';
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  plan: string;
}

export interface Film {
  title: string;
  year: number;
  genre: string;
  rating: number;
  type: 'Film' | 'Serie';
  isDutch?: boolean;
  posterUrl?: string;
}
