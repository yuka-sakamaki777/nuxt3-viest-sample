import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
    // 省略
    },
  },
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/'),
      '~': path.resolve(__dirname, './app/'),
    }
  },
})
