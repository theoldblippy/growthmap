// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.growthmap.consulting',
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    '/scorecard': '/diagnostic',
  },
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: true,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
