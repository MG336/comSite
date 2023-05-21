import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/styles.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@sd': path.resolve(__dirname, './socialData')
    }
  }
})
