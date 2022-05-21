import Vue from 'vue'
import Vuex from 'vuex'
import user_store from './module/user'

Vue.use(Vuex)

const defaultLoginResult = {
  token:null,
  user_id:null,
  user_name:null,
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLogin: false,
    loginResult: defaultLoginResult,
    isAdminLogin: false,
    adminLoginResult: defaultLoginResult,
  },
  mutations: {
    init(state){
      let loginResult = JSON.parse(localStorage.getItem("loginResult"));
      console.log(localStorage.getItem("loginResult"));
      if (loginResult !=null){
        state.loginResult = loginResult;
      }
    },
    login(state, loginResult){          // 登录
      state.loginResult = loginResult;
    },
    logout(state){                      // 退出
      localStorage.removeItem("loginResult");   // 将全局的loginResult删掉 
      state.loginResult = defaultLoginResult;
    },
    admin_init(state){
      let loginResult = JSON.parse(localStorage.getItem("adminLoginResult"));
      console.log(localStorage.getItem("loginResult"));
      if (loginResult !=null){
        state.adminLoginResult = loginResult;
      }
    },
    admin_login(state, loginResult){          // 登录
      state.adminLoginResult = loginResult;
    },
    admin_logout(state){                      // 退出
      localStorage.removeItem("adminLoginResult");   // 将全局的loginResult删掉 
      state.adminLoginResult = defaultLoginResult;
    }
  },
  actions: {
  },
  getters: {
    isLogin:state=>state.loginResult.user_id !== null,
    userID:state=>state.loginResult.user_id,
    username:state=>state.loginResult.user_name,
    accessToken:state=>state.loginResult.token,
    isAdminLogin:state=>state.adminLoginResult.user_id !== null,
    adminID:state=>state.adminLoginResult.user_id,
    adminname:state=>state.adminLoginResult.user_name,
    adminToken:state=>state.adminLoginResult.token,
  },
  modules: {
    user_store
  }
})
