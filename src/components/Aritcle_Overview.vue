<template>
  <el-container class="article_overview">
    <div class="article_block">
      <el-header id="article_overview_header">
      <h1 id="article_overview_title"
       href="#">
        {{title}}
      </h1>
      </el-header>
      <p id="article_overview_intro">
        {{intro}}
      </p>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Article_Overview',
  props: {
    title : String,
    intro : String,
  }
}
</script>

<style>
.article_block {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    margin-bottom: 2%;
    width: 80%;
    border: solid 1px #3f3f3f;
}
#article_overview_title {
  font-size:32px;
}
#article_overview_intro {
  font-size:24px;
}
.el-header {
  height : 20px;
}
</style>
