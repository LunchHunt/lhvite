import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5000,  
    host: "localhost", 
    strictPort: true,
    hmr: {
      host: "localhost",  // ✅ Forces HMR WebSocket to use correct host
      protocol: "ws",  // ✅ Ensures WebSockets use `ws://` instead of `wss://`
    },
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, 
  },
  ssr: false
})
