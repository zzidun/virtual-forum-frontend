<template>
  <el-container class="category_overview">
    <div class=category_block>
    <el-header id="category_overview_header">
      <h1 id="category_overview_name"
       href="#">
        {{name}}
      </h1>
    </el-header>
    <p id="category_overview_intro">
    {{intro}}
    </p>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Category_Overview',
  props: {
    name : String,
    intro : String,
  }
}
</script>

<style>
.category_block {
    margin: 2% 2%;
    border: solid 1px #3f3f3f;
}
#category_overview_name {
  font-size:32px;
}
#category_overview_intro {
  font-size:24px;
}
.el-header {
  height : 20px;
}
</style>
