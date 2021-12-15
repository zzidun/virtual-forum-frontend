<template>
    <el-container class="editor">
        <el-header>
            <el-button type="primary">
                发表{{tips}}
            </el-button>
        </el-header>
        <el-input
        type="textarea"
        placeholder="请在此处输入"
        rows="24"
        v-model="textarea">
        </el-input>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  },
  props: {
    tips : String
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