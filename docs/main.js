import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import gaui from './assets/lib/gaui';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(gaui)

import 'highlight.js/styles/github-gist.css'
import './assets/style/doc.less'
import './assets/lib/styles/gaui.css'
import './assets/lib/ga-iconfont'

// ie11 兼容vue-router
if (
  '-ms-scroll-limit' in document.documentElement.style &&
  '-ms-ime-align' in document.documentElement.style
) { // detect it's IE11
  window.addEventListener("hashchange", function (event) {
    let currentPath = window.location.hash.slice(1);
    router.push(currentPath)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
