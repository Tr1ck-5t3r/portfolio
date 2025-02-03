import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL || 'http://localhost:4321',

  integrations: [
    starlight({ title: 'Tarun R G' }),
    mdx(),
    sitemap(),
    playformCompress(),
    compressor({ gzip: true, brotli: false }),
  ],

  adapter: vercel(),
});