import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
   build: {
     outDir: 'dist',
   },
   assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
   server: {
     mimeTypes: {
       'application/javascript': ['js'],
     },
   },
})
