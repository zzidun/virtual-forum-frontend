<template>
    <el-container class="user_banner">
        
    </el-container>
</template>

<script>
export default {
  name: 'UserBanner',
  props: {
    user_name : String,
    count : String,
    context : String,
  }
}
</script>

<style>
.el-button {
    float: right;
    min-width: 80%;
    margin: 2% 10%;
}
</style>