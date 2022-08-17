import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from "vite-plugin-pages";
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      exclude: ["**/components/*.vue"],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  resolve: {
    // 路径别名
    alias: {
      "#": resolve(__dirname, "./src/components"),
      "@": resolve(__dirname, "./src"),
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
