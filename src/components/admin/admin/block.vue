<template>
  <el-container class="user-block grid">
    <el-header>
        <div>
            <a class = "text user-name" :href="`/user/`+userId" target="_blank" >{{UserName}}</a>
        </div>

    </el-header>
    <el-main>
        <span> </span>
    </el-main>
    <el-footer>
        <div>            
            <a href="javascript:void(0)" class = "comment-item text" style="float:right" @click="deleteAdmin">删除</a>
            <br/>
            <a href="javascript:void(0)" class = "comment-item text" style="float:right" @click="deleteComment">修改权限</a>
            <br/>
        </div>
    </el-footer>
    
  </el-container>
</template>

<script>
export default {
  name: 'AdminBlock',
  props: {
    UserId : String,
    UserName : String,
    AdminId : String,
    AdminPerm : String,
    BanPerm : String,
    CategoryPerm : String
  },
  data() {
    return {
    }
  },
  computed : {
    permColor(perm) {
        if (perm=="0")
            return this.getColor(0, 1);
        else 
            return this.getColor(30, 1);
    },
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
    font-weight:bold;
    text-decoration:none;
}


</style>
