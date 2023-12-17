import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo.jpg'],
      manifest: {
        name: 'My Vue PWA',
        short_name: 'VuePWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      },
    })],
})
