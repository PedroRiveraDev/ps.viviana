export interface NavigationItem {
  name: string;
  href: string;
}

export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Sobre Mí', href: '/#sobre-mi' },
  { name: 'Tarifas', href: '/#tarifas' },
  { name: 'Contacto', href: '/#contacto' },
] as const; 