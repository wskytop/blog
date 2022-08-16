import { createApp } from 'vue'
import './static/css/style.css'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')
