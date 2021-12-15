import Vue from 'vue'
import Vuex from 'vuex'
import user_store from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user_store
  }
})
