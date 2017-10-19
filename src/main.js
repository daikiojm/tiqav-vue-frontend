// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import VueLazyload from 'vue-lazyload'
import VueClipboard from 'vue-clipboard2'

Vue.use(Element, { locale })
Vue.use(VueLazyload)
Vue.use(VueClipboard)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
