import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      treeshake: false,
    },
    sourcemap: true,
  },
  plugins: [react()]
})
