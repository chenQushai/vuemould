// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/changeElementStyle.css';
import ElementUI from 'element-ui';
import config from './lib/config';
import vfilters from './lib/vfilters';
import 'babel-polyfill'
import {vuePlugin} from 'castle-haozijunqaq-utils'
Vue.use(vuePlugin);

//全局注册过滤器
for(let key in vfilters){
  Vue.filter(key,vfilters[key]);
}

Vue.use(config);
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
