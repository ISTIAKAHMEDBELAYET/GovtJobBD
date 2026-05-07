import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  outDir: './dist',
  site: 'https://govtjobbd.pages.dev',
});
