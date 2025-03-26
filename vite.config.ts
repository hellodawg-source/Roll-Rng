import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Roll-Rng/', // 👈 important for GitHub Pages path
  plugins: [react()],
});
