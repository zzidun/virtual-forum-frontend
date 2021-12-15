<template>
  <el-container>
    <el-form :model="register_form" :rules="rules" ref="register_form" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prog="name">
      <el-input v-model="register_form.name"></el-input>
    </el-form-item>

    <el-form-item label="用户邮箱" prop="email">
      <el-input v-model="register_form.email"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input v-model="register_form.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="register('register_form')">注册</el-button>
    </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      register_form: {
        name: '',
        email: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '名称以后可以改捏', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch('user_store/register', this.register_form).then((res) => {
        // 跳转主页
        const h = this.$createElement;
        this.$notify({
          title: '注册成功',
          message: h('i', { style: 'color: teal'}, '欢迎捏')
        });
        this.$router.replace({name: 'Home'})
      }).catch((err) => {
        const h = this.$createElement;
        this.$notify({
          title: '系统错误',
          message: h('i', { style: 'color: teal'}, '其实我也不知道发生了什么')
        });
      });
    }
  }
}
</script>

<style>

</style>