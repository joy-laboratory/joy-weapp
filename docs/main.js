import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import 'highlight.js/styles/github-gist.css'
import './assets/style/doc.less'

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
