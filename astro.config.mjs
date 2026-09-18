import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://sdsu-aerospace-portfolio.humble-ball-4570.chatgpt.site',
  build: {
    format: 'directory'
  }
});
