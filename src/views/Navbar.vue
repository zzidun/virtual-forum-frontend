<template>
  <el-container class="navbar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"
         @click="$router.replace({name: 'Home'})">
            <img class="header_icon" src="favicon.ico"/>
        </el-menu-item>

        <el-menu-item index="2"
         @click="$router.replace({name: 'News'})">
          新鲜事
        </el-menu-item>

        <el-menu-item index="3"
         @click="$router.replace({name: 'Categorys'})">
          板块们
        </el-menu-item>

        <el-menu-item index="4"
         v-if="!user_info"
         @click="$router.replace({name: 'User_Login'})">
          登陆
        </el-menu-item>

        <el-menu-item index="5"
         v-if="!user_info"
         @click="$router.replace({name: 'User_Register'})">
          注册
        </el-menu-item>

        <el-menu-item index="6"
         @click="$router.replace({name: 'User_Messages'})"
         v-if="user_info">
          消息
        </el-menu-item>

        <el-submenu index="7"
         v-if="user_info">
          <template slot="title">{{user_info.name}}</template>
          <el-menu-item index="7-1"
           @click="$router.replace({name: 'User_Profile'})">
            个人主页
          </el-menu-item>

          <el-menu-item index="7-2"
           @click="logout">
            登出
          </el-menu-item>
        </el-submenu>
    </el-menu>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
        // 清空信息
        this.$store.dispatch('user_store/logout')
        // 跳转页面
        const h = this.$createElement;
        this.$notify({
          title: '登出成功',
          message: h('i', { style: 'color: teal'}, '再见捏')
        });
        this.$router.replace({name: 'Home'})
      }
    },
    computed: {
      user_info() {
        return this.$store.state.user_store.info;
      }
    }
  }
</script>

<style>
.el-menu {
  min-width: 100%;
}
.el-menu-item {
  padding: 0% 5%;
}
.el-submenu {
  padding: 0% 5%;
}

.el-submenu .el-menu-item {
  padding: 0% 5%;
}
.header_icon {
    max-width: 32px;
    max-height: 32px;
}
</style>