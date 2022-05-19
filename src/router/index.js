import Vue from 'vue'
import VueRouter from 'vue-router'
import user_router from '@/router/module/user'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home.vue')
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: ()=>import('@/views/user/login.vue')
  },
  {
    path: '/user-register',
    name: 'UserRegister',
    component: ()=>import('@/views/user/register.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: ()=>import('@/views/user/user.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: ()=>import('@/views/User_Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  ...user_router
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 判断是否需要登陆
  if (to.meta.auth) {
    // 判断用户是否登陆
    if (store.state.user_store.token) {
      next()
    } else {
      router.push({name : 'User_Login'});
    }
  } else {
    next();
  }
})

export default router
