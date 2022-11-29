import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    //origin: 'http://192.168.0.25',
    //origin: 'http://127.0.0.1:8080',
    proxy: {
      '/foo': '192.168.0.25',
    }
  }
})
