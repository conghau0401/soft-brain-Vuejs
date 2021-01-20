import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import { i18n } from './plugins/i18n'
import './plugins/vue-js-modal'
import store from './store'
import router from './router'

Vue.config.productionTip = false
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
