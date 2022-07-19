import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  server: {
    // Only important if you use a non-localhost php server, like laravel valet:    
    // cors: true,
    // hmr: { host: 'localhost' },
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true
  },

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: resolve(process.cwd(), 'src/index.js')
    }
  },

  plugins: [
    liveReload(['content/**/*', 'site/**/*.php'], { root: process.cwd() })
  ]
})