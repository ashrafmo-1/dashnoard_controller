import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgr from '@svgr/vite-plugin'

export default defineConfig({
  plugins: [react()], //, svgr()
  server: {
    port: 5000,
  },
})