// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://psvivianapoveda.cl',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CL'
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    cssMinify: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'aos': ['aos']
        }
      }
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/tailwind'],
    },
    ssr: {
      noExternal: ['aos']
    }
  },
});
