import { createApp } from 'vue'
import './static/styles/style.css'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
});
const app = createApp(App)

// 注册全局组件
import UiArticle from './ui/article.vue'
app.component('UiArticle', UiArticle)

app.use(router).use(createPinia()).use(VMdPreview).mount('#app')
