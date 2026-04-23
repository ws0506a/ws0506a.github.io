// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://changqingws0506a.github.io',
  integrations: [
    preact({ include: ['**/components/*.tsx'] }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { throwOnError: false }]],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});