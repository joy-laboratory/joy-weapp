import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import ('../views/index.vue'),
      name: 'Introduction',
    }
  ],
  /**
   * 路由页面切换 滚动条问题
   */
  scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})

export default router

