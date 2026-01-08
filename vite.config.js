import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Ensure the server is accessible on the network (useful for Termux/mobile testing)
    host: '0.0.0.0',
    port: 3000,
    // Optional: Enable HMR polling for environments where file watching is unreliable (like some Termux setups)
    // watch: {
    //   usePolling: true,
    // },
  },
  build: {
    // Target modern browsers
    target: 'es2020',
    // Generate sourcemaps for easier debugging
    sourcemap: true,
    // Minify output using Terser
    minify: 'terser',
    // Configure output directory
    outDir: 'dist',
    // Configure asset handling
    assetsInlineLimit: 4096, // 4kb limit for inlining assets
  },
})