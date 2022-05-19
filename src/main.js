import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './service/api'


import './style/total.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:8089";

Vue.use(ElementUI);

new Vue({
  el : `#app`,
  router,
  store,
  render: h => h(App)
})
