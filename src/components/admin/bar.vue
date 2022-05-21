<template>
  <div class="admin-bar">
    <div>
        <a href="/" class = "item" style="float:left">主页</a>
        <a href="/" class = "item" style="float:left">管理员管理</a>
        <a href="/" class = "item" style="float:left">版块管理</a>
        <a href="/" class = "item" style="float:left">安全管理</a>
        <a href="/" class = "item" style="float:left">统计信息</a>
    </div>
    <div v-show="!isLogin" align="right"> 
        <a href="user-login" class = "item">登陆</a>
    </div>
    <div v-show="isLogin"  align="right">
        <span class = "item">{{ adminName }}</span>
        <a href="/" class = "item" @click="logout">登出</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminBar',
  created(){
    this.$store.commit("admin_init");
  },
  computed: {
    isLogin() {
        return this.$store.getters.isAdminLogin;
    },
    adminName(){
      return this.$store.getters.adminname;
    },
    adminId() {
      return this.$store.getters.adminID;
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
.admin-bar {
    background-color : #F4BFBF;
    z-index: 10005;
    position: float;
    width : 100%;
    top : 2px;
    border:1px solid #000;
}
.item {
    color: #0B4040;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}
</style>
