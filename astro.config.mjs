import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://beckham-moreland.me',
  output: 'static',
  build: {
    format: 'directory'
  }
});
