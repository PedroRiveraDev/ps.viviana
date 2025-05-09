export interface NavigationItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  duration: string;
  features: string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  email: string;
  phone: string;
  social: {
    instagram: string;
    linkedin: string;
  };
} 