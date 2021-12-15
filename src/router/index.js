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
    path: '/news',
    name: 'News',
    component: ()=>import('@/views/News.vue')
  },
  {
    path: '/categorys',
    name: 'Categorys',
    component: ()=>import('@/views/Categorys.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: ()=>import('@/views/Category.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: ()=>import('@/views/Article.vue')
  },
  {
    path: '/article_edit',
    name: 'Article_Edit',
    component: ()=>import('@/views/Article_Edit.vue')
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
