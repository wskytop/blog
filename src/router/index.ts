
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  scrollBehavior(to, from, savedPosition) {  // 路由跳转时定位到顶部
    return {
      top: 0
    }
  }
})
export default router
