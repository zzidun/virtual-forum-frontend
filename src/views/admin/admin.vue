<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <div>

            <div>
                <el-container class="user-block grid">
                <el-main>
                    <div align="center">
                        <a class = "text page-name" :href="'/post/'+postId" >管理员列表</a>
                    </div>
                </el-main>
                </el-container>
            </div>

            <div class="browse-bar">
                <a href="javascript:void(0)" class = "post-item text" @click="createAdminVisible = true">新增一个管理员</a>

                <el-dialog title="新建管理员" :visible.sync="createAdminVisible">
                    <el-form :model="adminForm">
                        <el-form-item label="成为新管理员的用户id" :label-width="formLabelWidth">
                            <el-input v-model="adminForm.userId" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="createAdminVisible = false">取 消</el-button>
                        <el-button type="primary" @click="createAdminVisible = false; createAdmin()">确 定</el-button>
                    </div>
                </el-dialog>

            </div>
          <div>


            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr v-for="(admin, i) in adminList" :key="i">
                <td :width = "colWidth">
                  <AdminBlock
                    :UserId="admin.userid"
                    :UserName="admin.username"
                    :AdminId="admin.adminid"
                    :AdminPerm="admin.adminperm"
                    :BanPerm="admin.banperm"
                    :CategoryPerm="admin.categoryperm"
                    >
                  </AdminBlock>
                </td>
              </tr>
            </table> 

                <div class="block" align="center">
                    <el-pagination
                        @current-change="pageChange"
                        layout="prev, pager, next"
                        :total="adminTot"
                        :page-size="16">
                    </el-pagination>
                </div>
            </div>
          </div>
        </td>
        <td class="aside grid"></td>
      </tr>
    </table> 
</template>

<script>
import AdminBlock from "@/components/admin/admin/block.vue"
  export default {
    name: "AdminAdmin",
    components: {
        AdminBlock
    },
    props: {
    },
    data() {
      return {
        createAdminVisible : false,
        curPage : 1,
        adminTot : 0,
        adminCur : 16,
        adminList: [],
        adminForm : {
          userId: '',
        },
        rules: {
          userId: [
            { required: true, message: '请输入用户id', trigger: 'blur' }
          ],
        }
      }
    },
    mounted: function() {
      this.getAdminList()
    },
    methods: {
      pageChange(val) {
        this.curPage = val;
        this.getCommentList();
      },
      createAdmin() {
        this.$axios({
          method: "post",
          url: "/admins",
            data: JSON.stringify({
                userid: this.adminForm.userId,
                adminperm : "0",
                banperm : "0",
                categoryperm : "0",
            })
        }).then(res => {
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
                title: '创建成功',
                message: h('i', { style: 'color: teal'}, '刷新后显示')
            });
            this.refreshList()
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '查询失败',
                message: h('i', { style: 'color: teal'}, '请检查你的权限')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      refreshList() {
        this.getAdminList()
      },
      getAdminList() {
        this.$axios({
          method: "get",
          url: "/admins",
          params: {
            left: (this.curPage-1)*16,
            right: (this.curPage)*16,
          }
        }).then(res => {
          if (res.code == 1000) {
            this.adminTot = Number(res.data.tot);
            this.adminCur = Number(res.data.cur);
            this.adminList = res.data.list;
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '查询失败',
                message: h('i', { style: 'color: teal'}, '请检查你的权限')
            });
            console.log(res.msg);
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
      colWidth: function() {
        return (window.innerWidth) /10 * 8 + 'px'
      },
    }
    
  }
  
</script>

<style>
.text{
    margin-right:10px;
    margin-left:10px;
}

.page-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}

.browse-bar {
    border:1px solid #000;
    width : 100%;
}

.post-item {
    color: black;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}

</style>