import { defineConfig } from 'vite'
import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  root:'.',
  build:{
    outDir:"dist",
    emptyOutDir: true,
    rollupOptions:{
      input: {main: resolve(__dirname, 'index.html'),
      // product: resolve(__dirname, 'product.html'),
  }
}
},
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@data': resolve(__dirname, 'src/data'),
      '@types': resolve(__dirname, 'src/types'),
    }
  },
  plugins: [
    tailwindcss(),
  ],
})
