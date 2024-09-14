import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the following configuration for externalizing react-router-dom
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});