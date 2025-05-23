/**
 * Constantes globales de la aplicación
 * Este archivo contiene todas las configuraciones y datos estáticos utilizados en la aplicación
 */

import type { SiteConfig, NavigationItem, Service, PricingPlan } from '../types';

/**
 * Configuración general del sitio web
 * Contiene información básica como nombre, descripción, datos de contacto y redes sociales
 */
export const SITE_CONFIG: SiteConfig = {
  name: 'Ps. Viviana Poveda',
  description: 'Psicóloga clínica, con experiencia en trastornos de ansiedad, depresivos y duelos.',
  url: 'http://localhost:4321',
  author: 'Ps.Viviana Poveda',
  email: 'ps.vivianapoveda@gmail.com',
  phone: '+56 9 35914385',
  social: {
    instagram: 'https://instagram.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-usuario',
  },
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