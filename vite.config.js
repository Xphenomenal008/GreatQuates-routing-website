import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // Allow access from all network interfaces
    port: 8080,      // Use port 8080
  },
})
