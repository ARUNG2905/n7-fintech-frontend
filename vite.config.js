import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  }
});