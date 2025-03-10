import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    registerType: 'prompt',
    injectRegister: 'inline',


    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'CharacterGenerator',
      short_name: 'CharacterGenerator',
      description: 'CharacterGenerator',
      theme_color: '#a39487',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  base:"/characterGenerator",
})