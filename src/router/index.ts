import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHashHistory('/w-blog/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 路由跳转时定位到顶部
    return {
      top: 0
    }
  }
})
export default router
