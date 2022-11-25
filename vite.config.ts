import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: '/w-blog/',
  plugins: [
    vue(),
    Pages({
      exclude: ['**/components/*.vue']
    }),
    // 按需引入element插件
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    // 路径别名
    alias: {
      '#': resolve(__dirname, './src/components'),
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
          return ''
        }
      }
    },
    cssTarget: 'chrome61'
  },
  server: {
    port: 8080, // 启动端口
    // hmr: {
    //   host: '127.0.0.1',
    //   port: 8080
    // },
    proxy: {
      '/api': {
        target: 'https://api.uixsj.cn/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@kangc/v-md-editor/lib/theme/vuepress.js']
  }
})
