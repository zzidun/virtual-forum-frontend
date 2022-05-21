<template>
  <el-container class="user-block grid">
    <el-header>
        <div align="center">
            <a class = "text admin-name" :href="`/user/`+userId" target="_blank" >{{userName}}</a>
        </div>

    </el-header>
    <el-main>
        <div align="center">
            <span class="perm-color" :style="{backgroundColor : adminPermColor}"> </span>
            <span class="text"> 管理员管理权限: {{adminPerm}}</span>
            <br/>

            <span class="perm-color" :style="{backgroundColor : banPermColor}"> </span>
            <span class="text"> 安全管理权限: {{banPerm}}</span>
            <br/>

            <span class="perm-color" :style="{backgroundColor : categoryPermColor}"> </span>
            <span class="text"> 版块管理权限: {{categoryPerm}}</span>
        </div>
    </el-main>
    <el-footer>
        <div align="center">            
            <a href="javascript:void(0)" class = "admin-item text" @click="deleteAdmin">删除</a>
            <a href="javascript:void(0)" class = "admin-item text" @click="setPermVisible = true">修改权限</a>
        

            <el-dialog title="设置管理员权限" :visible.sync="setPermVisible">
                <el-form :model="adminForm">
                    <el-form-item label="管理员管理权限" >
                        <el-input v-model="adminForm.adminPermInput" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="安全管理权限" >
                        <el-input v-model="adminForm.banPermInput" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="版块管理权限" >
                        <el-input v-model="adminForm.categoryPermInput" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="setPermVisible = false">取 消</el-button>
                    <el-button type="primary" @click="setPermVisible = false; setPerm()">确 定</el-button>
                </div>
            </el-dialog>
        
        </div>
    </el-footer>
    
  </el-container>
</template>

<script>
export default {
  name: 'AdminBlock',
  props: {
    userId : String,
    userName : String,
    adminId : String,
    adminPerm : String,
    banPerm : String,
    categoryPerm : String,
    refreshList : {
        type : Function
    }
  },
  data() {
    return {
        setPermVisible : false,
        adminForm : {
            adminPermInput: '',
            banPermInput: '',
            categoryPermInput: '',
        },
        rules : {
          adminPermInput: [
            { required: true, message: '输入新权限', trigger: 'blur' }
          ],
          banPermInput: [
            { required: true, message: '输入新权限', trigger: 'blur' }
          ],
          categoryPermInput: [
            { required: true, message: '输入新权限', trigger: 'blur' }
          ],
        }
    }
  },
  computed : {
    adminPermColor() {
        if (this.adminPerm == "0")
            return this.getColor(1, 0);
        else
            return this.getColor(0, 1);
    },
    banPermColor() {
        if (this.banPerm == "0")
            return this.getColor(1, 0);
        else
            return this.getColor(0, 1);
    },
    categoryPermColor() {
        if (this.categoryPerm == "0")
            return this.getColor(1, 0);
        else
            return this.getColor(0, 1);
    },
  },
  methods: {
    deleteAdmin() {
        this.$axios({
          method: "delete",
          url: "/admins/" + this.userId,
        }).then(res => {
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
                title: '删除成功',
                message: h('i', { style: 'color: teal'}, '刷新后显示')
            });
            this.refreshList()
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '删除失败',
                message: h('i', { style: 'color: teal'}, '请检查你的权限')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
    },
    setPerm() {
        this.$axios({
          method: "put",
          url: "/admins/" + this.userId,
            data: JSON.stringify({
                userid: this.userId,
                adminperm : this.adminForm.banPermInput,
                banperm : this.adminForm.banPermInput,
                categoryperm : this.adminForm.adminPermInput,
            })
        }).then(res => {
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
                title: '设置成功',
                message: h('i', { style: 'color: teal'}, '刷新后显示')
            });
            this.refreshList()
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '设置失败',
                message: h('i', { style: 'color: teal'}, '请检查你的权限')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.category-block {
    height : 100%;
    width : 100%
}

.perm-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid var(--color-primer-border-contrast);
    border-radius: 50%;
}

.text{
    margin-right:10px;
    margin-left:10px;
}

.admin-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}

.categoryer-name {
    font-weight:bold;
    text-decoration:none;
}


.admin-item {
    color: black;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}

</style>
