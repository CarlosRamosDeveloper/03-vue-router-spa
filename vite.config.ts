import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@landingPages': fileURLToPath(new URL('./src/modules/landing/pages', import.meta.url)),
      '@authPages': fileURLToPath(new URL('./src/modules/auth/pages', import.meta.url)),
    },
  },
});
