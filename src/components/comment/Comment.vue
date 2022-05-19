<template>
  <el-container class="comment">
    <div class=comment_block>
    <el-container>
        <el-aside class="commenter">
          <a>{{user_name}}</a><br/><br/><br/>
          <el-link type="primary">回复</el-link></el-aside>
        <el-container>
            <el-header>
              {{count}}
            </el-header>
            <el-main>{{context}}</el-main>
        </el-container>
    </el-container>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    user_name : String,
    count : String,
    context : String,
  }
}
</script>

<style>
.comment_block {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    margin-bottom: 2%;
    width: 80%;
    border: solid 1px #3f3f3f;
}
.el-header {
  height : 20px;
}
.el-aside {
  max-width: 20%;
}
.commenter {
  width: 100px;
  border: solid 1px #3f3f3f;
  text-align: center;
}
</style>
