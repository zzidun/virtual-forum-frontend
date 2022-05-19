<template>
  <el-container class="category_block grid">
    <a>{{id}}</a>
    <a>{{name}}</a>
    <a>{{speak}}</a>
    <a>{{follow}}</a>
    <a>{{categoryer}}</a>
  </el-container>
</template>

<script>
export default {
  name: 'CategoryBlock',
  props: {
    id : String,
    name : String,
    speak : String,
    follow : String,
    categoryer : String,
  }
}
</script>

<style>
.category_block {
    height : 100%;
    width : 100%
}
</style>
