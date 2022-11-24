/// <reference types="vite/client" />
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/preview-html'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
