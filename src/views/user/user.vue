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

            <div class="browse-bar" align="center">
              <el-button v-if="!isShield" type="primary" @click="shieldUser">屏蔽他</el-button>
              <el-button v-if="isShield" type="primary" @click="unshieldUser">重新认识他</el-button>
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
        shielded : "0",
        userId : "0",
        userName : "",
        userSpeak : "",
        userSignal : "",
        lastLoginIpv4 : "",
        lastLoginTime: ""
      }
    },
    mounted: function() {
      this.getUser()
    },
    methods: {
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