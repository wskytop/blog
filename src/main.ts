import { createApp } from 'vue'
import './static/styles/style.css'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')
