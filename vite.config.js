/// <reference types="vitest/config" />

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'), // 确保路径正确
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd', 'iife'], // 添加 iife 格式
    },
    rollupOptions: {
      external: ['vue'], // 指定外部依赖
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    minify: 'terser', // 选择压缩工具
    sourcemap: false, // 根据需要设置为 true
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true, // 将 CSS 拆分成单独文件
  },
  test: {
    globals: true, // 启用类似 Jest 的全局测试 API
    environment: 'happy-dom', // 使用 happy-dom 模拟 DOM
  },
})
