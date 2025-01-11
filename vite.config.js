import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({ open: true }),
    
  ],
  css:{
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()]
    }
  },
  server: {
    port:8080,
    hot: true, 
  },
})
