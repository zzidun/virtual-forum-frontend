import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/user/:id',
    name: 'User',
    component: ()=>import('@/views/user/user.vue')
  },
  {
    path: '/categorys',
    name: 'Categorys',
    component: ()=>import('@/views/category/categorys.vue')
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: ()=>import('@/views/category/category.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: ()=>import('@/views/post/post.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: ()=>import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
