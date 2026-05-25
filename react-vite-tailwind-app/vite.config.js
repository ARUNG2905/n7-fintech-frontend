module.exports = {
  root: true,
  plugins: ['vite-plugin-react'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {},
  },
};