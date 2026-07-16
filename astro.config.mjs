// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://growthmap.consulting',
  integrations: [sitemap()],
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: true,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});