import { reactRouter } from '@react-router/dev/vite';
import netlify from '@netlify/vite-plugin-react-router';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  plugins: [reactRouter(), netlify()],
  resolve: { alias: { '~': fileURLToPath(new URL('./app', import.meta.url)) } },
});
