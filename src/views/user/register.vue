<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
    <tr>
        <td class="aside"></td>
        <td class="main">
          <el-form :model="registerForm" :rules="rules" ref="loginForm" label-width="100px" >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerForm.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input  type="password" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirm">
            <el-input  type="password" v-model="registerForm.confirm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register('registerForm')">注册</el-button>
            <el-button type="primary" @click="toLogin()">登陆</el-button>
          </el-form-item>
          </el-form>

        </td>
        <td class="aside"></td>
    </tr>
    </table> 
</template>

<script>
  export default {
    name: "UserRegister",
    data() {
      return {
        registerForm: {
          name: '',
          email: '',
          password: '',
          confirm: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '这是你找回帐号的唯一凭证', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          confirm: [
            { required: true, message: '确认密码', trigger: 'blur' },
            {
                validator:(rule,value,callback)=>{
                    if(value===''){
                        callback(new Error('请再次输入密码'))
                    }else if(value!==this.registerForm.password){
                        callback(new Error('两次输入密码不一致'))
                    }else{
                        callback( )
                    }
                }
            }
          ],
        }
      };
    },
    computed: {
    },
    created() {
    },
    methods: {
      register() {
        this.$axios({
          method: 'post',
          url:'/register',
          data: JSON.stringify({
            name: this.registerForm.name,
            email: this.registerForm.email,
            password: this.registerForm.password
          })
        }).then((res)=>{
          console.log(res.data)
          if (res.code == 1000) {
            console.log(res.msg)
            const h = this.$createElement;
            this.$notify({
            title: '注册成功',
            message: h('i', { style: 'color: teal'}, '欢迎加入')
            });
            this.$router.push({path: this.redirect || '/' })
          } else {
            const h = this.$createElement;
            this.$notify({
            title: '验证错误',
            message: h('i', { style: 'color: teal'}, '请检查密码和网络')
            });
            console.log(res.msg)
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      toLogin() {
         this.$router.push("/user-login") 
      }
    },
    computed: {
      tableHeight: function() {
        return (window.innerHeight) + 'px';
      },
      tableWidth: function() {
        return (window.innerWidth) + 'px';
      }
    }
    
  }
  
</script>

<style>

</style>