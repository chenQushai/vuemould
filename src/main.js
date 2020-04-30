import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {vuePlugin} from 'castle-haozijunqaq-utils'
import './components/registerComponent'
Vue.use(vuePlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
