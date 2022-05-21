<template>
  <el-container class="user-block grid">
    <el-header>
        <div align="center">
            <a class = "text category-name" :href="`/category/`+categoryId" target="_blank" >版块: {{categoryName}}</a>
        </div>

    </el-header>
    <el-main>
        <div align="center">
            <a class = "text categoryer-name" :href="`/user/`+categoryerId" target="_blank" >版主: {{categoryer}}</a>
        </div>
    </el-main>
    <el-footer>
        <div align="center">            
            <a href="javascript:void(0)" class = "category-item text"  @click="deleteCategory">删除版块</a>
            <a href="javascript:void(0)" class = "category-item text" @click="setCategoryerVisible = true">设置版主</a>

            <el-dialog title="设置版主" :visible.sync="setCategoryerVisible">
                <el-form :model="categoryerForm">
                    <el-form-item label="版主的用户id" >
                        <el-input v-model="categoryerForm.categoryerId" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="setCategoryerVisible = false">取 消</el-button>
                    <el-button type="primary" @click="setCategoryerVisible = false; setCategoryer()">确 定</el-button>
                </div>
            </el-dialog>

        </div>
    </el-footer>
    
  </el-container>
</template>

<script>
export default {
  name: 'AdminCategoryBlock',
  props: {
    categoryId : String,
    categoryName : String,
    categoryer : String,
    categoryerId : String,
    refreshList : {
        type : Function
    }
  },
  data() {
    return {
        setCategoryerVisible : false,
        categoryerForm : {
          categoryerId: '',
        },
        rules: {
          categoryerId: [
            { required: true, message: '请输入版主id', trigger: 'blur' }
          ],
        }
    }
  },
  computed : {
  },
  methods : {
    setCategoryer() {
        this.$axios({
          method: "put",
          url: "/categories/" + this.categoryId,
            data: JSON.stringify({
                userid: this.categoryerForm.categoryerId,
                type : "1"
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
    },
    deleteCategory() {
        this.$axios({
          method: "delete",
          url: "/categories/" + this.categoryId,
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
    }
  }
}
</script>

<style>
.category-block {
    height : 100%;
    width : 100%
}

.category-color {
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

.category-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}

.categoryer-name {
    font-size: 24px;
    font-weight:bold;
    text-decoration:none;
}

.category-item {
    color: black;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}

</style>
