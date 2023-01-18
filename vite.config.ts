import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// config babel plugins
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      parserOpts: {
        plugins: ['decorators-legacy', 'classProperties']
      }
    }
  })],
  resolve: {
    alias: [
      { find: '@models', replacement: path.resolve(__dirname, 'src/models') },
      { find: '@interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@styled', replacement: path.resolve(__dirname, 'src/styled') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      { find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
    ],
  }
})
