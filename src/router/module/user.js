const user_router = [
  {
    path: '/user_register',
    name: 'User_Register',
    component: ()=>import('@/views/User_Register.vue')
  },
  {
    path: '/user_login',
    name: 'User_Login',
    component: ()=>import('@/views/User_Login.vue')
  },
  {
    path: '/user_profile',
    name: 'User_Profile',
    meta: {
        auth : true
    },
    component: ()=>import('@/views/User_Profile.vue')
  },
  {
    path: '/user_messages',
    name: 'User_Messages',
    meta: {
        auth : true
    },
    component: ()=>import('@/views/User_Messages.vue')
  },
];

export default user_router;