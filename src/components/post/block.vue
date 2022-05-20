<template>
  <el-container class="post-block grid">
    <el-aside width="30%"> 
        <UserAsideBlock
        :id="1"
        :name="zzidun"
        :speak="3300"
        :count="1000">

        </UserAsideBlock>
    </el-aside>

    <el-container class = "gird">
        <el-main>
            主体
        </el-main>
        <el-footer>
            
        </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import UserAsideBlock from "@/components/user/asideBlock.vue"
export default {
  name: 'PostBlock',
  components : {
    UserAsideBlock
  },
  props: {
    postId : String,
    postTitle : String,
    postSpeak : String,
    userId : String,
    userName : String,
    userSpeak : String,
    userCount : String,
}
}
</script>

<style>
.grid {
    border:1px solid #000;
}


</style>
