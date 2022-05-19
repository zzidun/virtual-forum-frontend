<template>

  <div class="user_bar grid" align="right">
    <div v-show="!isLogin"> 
      <el-link href="user-login" class = "item">登陆</el-link>
      <el-link href="user-register" class = "item">注册</el-link>
    </div>
    <div v-show="isLogin">
        <el-link href="user" class = "item">{{ userName }}</el-link>
        <el-link href="" class = "item" @click="logout">登出</el-link>
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
    background-color : white;
    z-index: 10005;
    position: float;
    width : 100%;
    top : 2px;
}
.item {
    margin-right:10px;
    margin-left:10px;
}
</style>
