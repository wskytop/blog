import { createApp } from 'vue'
import './static/styles/style.css'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
