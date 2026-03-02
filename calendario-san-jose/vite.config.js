import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/calendario-san-jose/', // Esto es vital para que cargue en GitHub
})