<template>
  <el-container>
    <el-form :model="login_form" :rules="rules" ref="login_form" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户邮箱" prop="email">
        <el-input v-model="login_form.email"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input v-model="login_form.password"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="login('login_form')">登陆</el-button>
    </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      login_form: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: '请输入注册时的邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch('user_store/login', this.login_form).then((res) => {
        // 跳转主页
        const h = this.$createElement;
        this.$notify({
          title: '登陆成功',
          message: h('i', { style: 'color: teal'}, '欢迎捏')
        });
        this.$router.replace({name: 'Home'})
      }).catch((err) => {
        const h = this.$createElement;
        this.$notify({
          title: '验证错误',
          message: h('i', { style: 'color: teal'}, '检查一下邮箱和密码捏')
        });
      });
    }
  }
}
</script>

<style>

</style>