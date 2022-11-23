import { createApp } from 'vue'
import './static/styles/style.css'
import { createPinia } from 'pinia'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js' // VuePress主题以及样式（这里也可以选择github主题）
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import '@kangc/v-md-editor/lib/style/preview.css'
import '@kangc/v-md-editor/lib/style/preview-html.css'
import Prism from 'prismjs' // Prism
import 'prismjs/components/prism-json' // 代码高亮
import { xss } from '@kangc/v-md-editor'
import router from './router'
import App from './App.vue'

// 注册全局组件
import UiArticle from './ui/article.vue'

VMdPreview.use(vuepressTheme, {
  Prism
})
const app = createApp(App)

app.component('UiArticle', UiArticle)
app.directive('title', {
  mounted(el) {
    document.title = el.dataset.title
  }
})
app
  .use(router)
  .use(createPinia())
  .use(VMdPreview)
  .use(VMdPreviewHtml)
  .mount('#app')
app.provide('toHtml', (md: any) => {
  return xss.process(VMdPreview.vMdParser.themeConfig.markdownParser.render(md))
})
