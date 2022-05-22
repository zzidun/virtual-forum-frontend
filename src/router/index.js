import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home.vue'),
    meta:{
        // 页面标题title
        title: '主页'
    }
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: ()=>import('@/views/user/login.vue'),
    meta:{
        // 页面标题title
        title: '用户登陆'
    }
  },
  {
    path: '/user-register',
    name: 'UserRegister',
    component: ()=>import('@/views/user/register.vue'),
    meta:{
        // 页面标题title
        title: '用户注册'
    }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: ()=>import('@/views/user/user.vue'),
    meta:{
        // 页面标题title
        title: '用户详情'
    }
  },
  {
    path: '/categorys',
    name: 'Categorys',
    component: ()=>import('@/views/category/categorys.vue'),
    meta:{
        // 页面标题title
        title: '版块列表'
    }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: ()=>import('@/views/category/category.vue'),
    meta:{
        // 页面标题title
        title: '版块详情'
    }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: ()=>import('@/views/post/post.vue'),
    meta:{
        // 页面标题title
        title: '帖子详情'
    }
  },
  {
    path : '/admin',
    name: 'AdminHome',
    component: ()=>import('@/views/admin/home.vue'),
    meta:{
        // 页面标题title
        title: '管理页'
    }
  },
  {
    path : '/admin/admin',
    name: 'AdminAdmin',
    component: ()=>import('@/views/admin/admin.vue'),
    meta:{
        // 页面标题title
        title: '管理员管理'
    }
  },
  {
    path : '/admin/category',
    name: 'AdminCategory',
    component: ()=>import('@/views/admin/category.vue'),
    meta:{
        // 页面标题title
        title: '版块管理'
    }
  },
  {
    path : '/admin/secure',
    name: 'AdminSecure',
    component: ()=>import('@/views/admin/secure.vue'),
    meta:{
        // 页面标题title
        title: '安全管理'
    }
  },
  {
    path : '/admin/statistic',
    name: 'AdminStatistic',
    component: ()=>import('@/views/admin/statistic.vue'),
    meta:{
        // 页面标题title
        title: '统计信息'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: ()=>import('@/views/404.vue'),
    meta:{
        // 页面标题title
        title: '找不到页面'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
