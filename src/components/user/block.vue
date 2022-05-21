<template>
    <el-container class="user_block">
        
    </el-container>
</template>

<script>
export default {
  name: 'UserBlock',
  props: {
    user_name : String,
    count : String,
    context : String,
  },
    data() {
      return {
        user_name : "",
        count : "",
        context : "",
      };
    },
}
</script>

<style>
.el-button {
    float: right;
    min-width: 80%;
    margin: 2% 10%;
}
</style>