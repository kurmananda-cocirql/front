import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['cocirql.com', 'www.cocirql.com'],
    host: '0.0.0.0', // important: allows external access
    port: 5173       // (optional) keep it fixed
  }
})
