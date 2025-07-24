/**
 * Constantes globales de la aplicación
 * Este archivo contiene todas las configuraciones y datos estáticos utilizados en la aplicación
 */

import type { SiteConfig, NavigationItem, Service, PricingPlan } from '../types';

/**
 * Configuración general del sitio web
 * Contiene información básica como nombre, descripción, datos de contacto y redes sociales
 */
export const SITE_CONFIG = {
  name: 'Ps. Viviana Poveda | Psicóloga Clínica en Santiago',
  description: 'Psicóloga clínica especialista en terapia individual, ansiedad y depresión en Santiago de Chile. Atención presencial y online. Primera sesión gratuita.',
  url: 'https://psvivianapoveda.cl',
  author: 'Ps. Viviana Poveda',
  locale: 'es_CL',
  type: 'website',
  keywords: 'psicóloga santiago, terapia psicológica, psicóloga online, terapia individual, ansiedad, depresión, salud mental, atención psicológica chile',
  themeColor: '#FDF2F8', // Color rosa claro
  contact: {
    email: 'ps.vivianapoveda@gmail.com',
    phone: '+56 9 35914385', // Reemplazar con número real
    address: 'Santiago, Chile',
  },
  social: {
    instagram: 'https://instagram.com/ps.vivianapoveda',
    whatsapp: 'https://wa.me/5635914385', // Reemplazar con número real
  }
};

/**
 * Menú de navegación principal
 * Define la estructura del menú y los enlaces principales del sitio
 */
export const NAVIGATION: NavigationItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Sobre Mí', href: '/#sobre-mi' },
  { name: 'Tarifas', href: '/#tarifas' },
  { name: 'Contacto', href: '/#contacto' },
];

/**
 * Servicios ofrecidos
 * Lista de servicios profesionales disponibles con sus descripciones e iconos
 */
export const SERVICES: Service[] = [
  {
    id: 'terapia-individual',
    title: 'Terapia Individual',
    description: 'Sesiones personalizadas para abordar tus necesidades específicas.',
    icon: 'user',
  },
  {
    id: 'terapia-pareja',
    title: 'Terapia de Pareja',
    description: 'Mejora la comunicación y fortalece tu relación.',
    icon: 'heart',
  },
  {
    id: 'ansiedad',
    title: 'Ansiedad y Depresión',
    description: 'Aprende técnicas efectivas para manejar la ansiedad.',
    icon: 'brain',
  },
];

/**
 * Planes de precios y tarifas
 * Define los diferentes planes de servicios con sus características y precios
 */
export const PRICING: PricingPlan[] = [
  {
    id: 'sesion-individual',
    title: 'Sesión Individual',
    price: 60,
    duration: '50 min',
    features: [
      'Sesión personalizada',
      'Evaluación inicial',
      'Técnicas personalizadas',
      'Seguimiento continuo',
    ],
  },
  {
    id: 'bono-4-sesiones',
    title: 'Bono 4 Sesiones',
    price: 220,
    duration: '4 sesiones',
    features: [
      '4 sesiones individuales',
      'Ahorro del 8%',
      'Flexibilidad horaria',
      'Seguimiento personalizado',
    ],
  },
  {
    id: 'terapia-pareja',
    title: 'Terapia de Pareja',
    price: 80,
    duration: '60 min',
    features: [
      'Sesión para parejas',
      'Técnicas de comunicación',
      'Resolución de conflictos',
      'Fortalecimiento de la relación',
    ],
  },
];

export const SCHEMA_ORG = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://psvivianapoveda.cl/#organization",
  "name": "Ps. Viviana Poveda - Psicóloga Clínica",
  "image": "https://psvivianapoveda.cl/images/logo.png",
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "telephone": SITE_CONFIG.contact.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santiago",
    "addressRegion": "Región Metropolitana",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-33.4489",
    "longitude": "-70.6693"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    SITE_CONFIG.social.instagram
  ]
}; 