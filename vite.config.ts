import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: 'animation', replacement: resolve(__dirname, 'src/animation') },
      { find: 'components', replacement: resolve(__dirname, 'src/components') },
      { find: 'context', replacement: resolve(__dirname, 'src/context') },
      { find: 'styles', replacement: resolve(__dirname, 'src/styles') },
      { find: 'layouts', replacement: resolve(__dirname, 'src/layouts') },
      { find: 'hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: 'images', replacement: resolve(__dirname, 'src/images') },
      { find: 'global', replacement: resolve(__dirname, 'src/global') },
      { find: 'pages', replacement: resolve(__dirname, 'src/pages') },
      { find: 'ui', replacement: resolve(__dirname, 'src') },
      { find: 'utilities', replacement: resolve(__dirname, 'src/utilities') },
      { find: 'types', replacement: resolve(__dirname, 'src/types') },
    ],
  },
})
