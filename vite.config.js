import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'DocScan - Image to Text Converter',
        short_name: 'DocScan',
        description: 'Free online OCR tool to extract text from images',
        theme_color: '#667eea',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ocr: ['tesseract.js'], // If using Tesseract
          ui: ['react-dropzone', 'react-toastify']
        }
      }
    }
  },
  server: {
    host: true,
    port: 3000
  }
})