<template>
  <div class="user_bar">
    <div>
        <a href="/" class = "item" style="float:left">主页</a>
    </div>
    <div v-show="!isLogin" align="right"> 
        <a href="user-login" class = "item">登陆</a>
        <a href="user-register" class = "item">注册</a>
    </div>
    <div v-show="isLogin"  align="right">
        <a href="user" class = "item">{{ userName }}</a>
        <a href="/" class = "item" @click="logout">登出</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserBar',
  created(){
    this.$store.commit("init");
  },
  computed: {
    isLogin() {
        return this.$store.getters.isLogin;
    },
    userName(){
      console.log(this.$store.getters.username);
      return this.$store.getters.username;
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
}
</script>

<style>
.user_bar {
    background-color : #EE0000;
    z-index: 10005;
    position: float;
    width : 100%;
    top : 2px;
    border:1px solid #000;
}
.item {
    color: white;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}
</style>
