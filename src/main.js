import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './less/common.less'

import 'swiper/css/swiper.min.css'

import './fifter/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
