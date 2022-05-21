<template>
  <div class="user-bar">
    <div>
        <a href="/" class = "item" style="float:left;">主页</a>
        <a href="/categorys" class = "item" style="float:left;">版块</a>
    </div>
    <div v-show="!isLogin" align="right"> 
        <a href="user-login" class = "item" style="">登陆</a>
        <a href="user-register" class = "item" style="">注册</a>
    </div>
    <div v-show="isLogin"  align="right">
        <a :href="`user/`+userId" class = "item" style="">{{ userName }}</a>
        <a href="/" class = "item" @click="logout" style="">登出</a>
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
    },
    userId() {
      console.log(this.$store.getters.username);
      return this.$store.getters.userID;
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
.user-bar {
    background-color : #FAF0D7;
    z-index: 10005;
    position: float;
    width : 100%;
    top : 2px;
    border:1px solid #000;
}
.item {
    color: #050F28;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}
</style>
