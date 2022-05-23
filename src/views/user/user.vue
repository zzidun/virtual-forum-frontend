<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
    <tr>
        <td class="aside grid"></td>
        <td class="main grid">
          <div>
            <el-container class="user-block">
              <el-main>
                <div align="center">
                  <span class = "text user-name" >{{userName}}</span>
                  <br/>
                  <span class = "text user-signal" >{{userSignal}}</span>
                </div>
              </el-main>
              <el-footer>
                <div class = "desc-number" align="center">
                  <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
                  <span class="speak text">发言数量: {{userSpeak}}</span>
                  <br/>
                  <span class="speak text">最后登陆ip: {{lastLoginIpv4}}</span>
                  <span class="speak text">最后登陆时间: {{lastLoginTime}}</span>
                </div>
              </el-footer>
            </el-container>

            <div class="browse-bar" align="center" v-if="otherUser">
              <el-button v-if="!isShield" type="primary" @click="shieldUser">屏蔽他</el-button>
              <el-button v-if="isShield" type="primary" @click="unshieldUser">重新认识他</el-button>
            </div>

            <div class="browse-bar" align="center" v-if="!otherUser">
              <el-button v-if="!isShield" type="primary" @click="editUserVisible = true">修改用户信息</el-button>

                <el-dialog title="设置管理员权限" :visible.sync="editUserVisible">
                  <el-form :model="userForm">
                      <el-form-item label="简介" >
                          <el-input v-model="userForm.signal" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="新邮箱" >
                          <el-input v-model="userForm.email" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="新密码" >
                          <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="旧密码" >
                          <el-input type="password" v-model="userForm.passwordOld" autocomplete="off"></el-input>
                      </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                      <el-button @click="editUserVisible = false">取 消</el-button>
                      <el-button type="primary" @click="editUserVisible = false; editUser()">确 定</el-button>
                  </div>
                </el-dialog>

            </div>

          </div>
        </td>
        <td class="aside grid"></td>
    </tr>
    </table> 
</template>

<script>
  export default {
    name: "User",
    computed: {
    },
    data() {
      return {
        editUserVisible : false,
        shielded : "0",
        userId : "0",
        userName : "",
        userSpeak : "",
        userSignal : "",
        lastLoginIpv4 : "",
        lastLoginTime: "",
        userForm : {
          signal : '',
          email: '',
          password : '',
          passwordOld: '',
        },
        rules : {
          signal: [
            { required: true, message: '输入简介', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '输入新邮箱', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '输入新密码', trigger: 'blur' }
          ],
          passwordOld: [
            { required: true, message: '输入旧密码', trigger: 'blur' }
          ],
        }
      }
    },
    mounted: function() {
      this.getUser()
    },
    methods: {
      editUser() {
        this.$axios({
          method: "put",
          url: "/users/" + this.userId,
            data: JSON.stringify({
                email: this.userForm.email,
                password : this.userForm.password,
                signal : this.userForm.signal,
                passwordold : this.userForm.passwordOld,
            })
        }).then(res => {
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
                title: '设置成功',
                message: h('i', { style: 'color: teal'}, '刷新后显示')
            });
            this.refreshPage()
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '设置失败',
                message: h('i', { style: 'color: teal'}, '请检查你输入的信息')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      refreshPage() {
        this.getUser()
      },
      getUser() {
        this.$axios({
          method: "get",
          url: "/user/" + this.$route.params.id,
        }).then(res => {
          console.log(res.data, 222);
          this.userId = this.$route.params.id;
          if (res.code == 1000) {
            this.shielded = res.data.shielded;
            this.userName = res.data.name;
            this.userSpeak = res.data.speak;
            this.userSignal = res.data.signal;
            this.lastLoginIpv4 = res.data.lastip;
            this.lastLoginTime = res.data.lasttime;
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '访问失败',
              message: h('i', { style: 'color: teal'}, '这个用户不存在哦')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      shieldUser() {
        this.$axios({
          method: "post",
          url: "/shields",
          data: JSON.stringify({
            userid1: this.$store.getters.userID,
            userid2: this.$route.params.id,
          })
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
              title: '屏蔽成功',
              message: h('i', { style: 'color: teal'}, '再也见不到他了')
            });
            this.getUser();
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '屏蔽失败',
              message: h('i', { style: 'color: teal'}, '可能没登陆或者用户不存在')
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      unshieldUser() {        
        this.$axios({
          method: "delete",
          url: "/shields/" + this.shielded,
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
              title: '取消屏蔽成功',
              message: h('i', { style: 'color: teal'}, '重新认识他吧')
            });
            this.getUser();
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '取消屏蔽失败',
              message: h('i', { style: 'color: teal'}, '可能没登陆或者用户不存在')
            });
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    computed: {
      tableHeight: function() {
        return (window.innerHeight) + 'px';
      },
      tableWidth: function() {
        return (window.innerWidth) + 'px';
      },
      isShield : function() {
        return this.shielded != "0"
      },
      otherUser: function() {
        return this.$route.params.id !=  this.$store.getters.userID
      }
    }
    
  }
  
</script>

<style>

.text{
    margin-right:10px;
    margin-left:10px;
}

.user-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}

.user-name {
    font-size: 24px;
    font-weight:bold;
    text-decoration:none;
}

</style>