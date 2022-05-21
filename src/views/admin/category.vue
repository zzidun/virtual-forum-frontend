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
                        <span class = "text page-name" >版块列表</span>
                    </div>
                </el-main>
                </el-container>
            </div>

            <div class="browse-bar">
                <a href="javascript:void(0)" class = "post-item text" @click="createCategoryVisible = true">新增一个版块</a>

                <el-dialog title="新建版块" :visible.sync="createCategoryVisible">
                    <el-form :model="categoryForm">
                        <el-form-item label="新版块的名称" :label-width="formLabelWidth">
                            <el-input v-model="categoryForm.categoryName" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="createCategoryVisible = false">取 消</el-button>
                        <el-button type="primary" @click="createCategoryVisible = false; createCategory()">确 定</el-button>
                    </div>
                </el-dialog>

            </div>
          <div>


            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr v-for="(category, i) in categoryList" :key="i">
                <td :width = "colWidth">
                  <AdminCategoryBlock
                    :categoryId="category.id"
                    :categoryName="category.name"
                    :categoryer="category.categoryer"
                    :categoryerId="category.categoryerid"
                    :refreshList="refreshList">
                  </AdminCategoryBlock>
                </td>
              </tr>
            </table> 

            <div class="block" align="center">
                <el-pagination
                    @current-change="pageChange"
                    layout="prev, pager, next"
                    :total="categoryTot"
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
import AdminCategoryBlock from "@/components/admin/category/block.vue"
  export default {
    name: "AdminCategory",
    components: {
        AdminCategoryBlock
    },
    props: {
    },
    data() {
      return {
        createCategoryVisible : false,
        curPage : 1,
        categoryTot : 0,
        categoryCur : 16,
        categoryList: [],
        categoryForm : {
          categoryName: '',
        },
        rules: {
          categoryName: [
            { required: true, message: '请输入版块名称', trigger: 'blur' }
          ],
        }
      }
    },
    mounted: function() {
      this.getCategoryList()
    },
    methods: {
      pageChange(val) {
        this.curPage = val;
        this.getCommentList();
      },
      createCategory() {
        this.$axios({
          method: "post",
          url: "/categories",
            data: JSON.stringify({
                name: this.categoryForm.categoryName,
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
        this.getCategoryList()
      },
      getCategoryList() {
        this.$axios({
          method: "get",
          url: "/categories",
          params: {
            left: (this.curPage-1)*16,
            right: (this.curPage)*16,
          }
        }).then(res => {
          if (res.code == 1000) {
            this.categoryTot = Number(res.data.tot);
            this.categoryCur = Number(res.data.cur);
            this.categoryList = res.data.list;
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