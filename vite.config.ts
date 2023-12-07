import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, ManifestV3Export } from '@crxjs/vite-plugin'
import UnoCSS from 'unocss/vite'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),
    // crx({
    //   manifest: manifest as ManifestV3Export
    // }),
  ],
})
