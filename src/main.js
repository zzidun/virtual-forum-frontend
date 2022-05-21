import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './service/api'


import './style/total.css'

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdEditor);


Vue.prototype.$axios = axios;
Vue.prototype.getColor = function (count, base) {
  var countNum = Number(count)
  if (countNum < base * 1) {
      return "#00FF00"
  } else if (countNum < base * 2) {
      return "#00FFFF"
  } else if (countNum < base * 4) {
      return "#0000FF"
  } else if (countNum < base * 8) {
      return "#8B00FF"
  } else if (countNum < base * 16) {
      return "#FF7F00"
  } else {
      return "#FF0000"
  }
}

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:8089";

Vue.use(ElementUI);

new Vue({
  el : `#app`,
  router,
  store,
  render: h => h(App)
})
