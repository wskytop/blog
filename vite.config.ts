import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import pages from "vite-plugin-pages";
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    pages({
      exclude: ["**/components/*.vue"],
    }),
  ],
  resolve: {
    // 路径别名
    alias: {
      "@@": resolve(__dirname, "."),
      "~": resolve(__dirname, "./src"),
      "@": resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
    ],
  },
})
