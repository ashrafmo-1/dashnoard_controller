import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    open: '/',
    plugins: [svgr(), react()],
  },
})