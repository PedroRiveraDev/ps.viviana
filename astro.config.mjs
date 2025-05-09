// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL || 'https://tudominio.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/tailwind'],
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
