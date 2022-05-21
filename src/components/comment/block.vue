<template>
  <el-container class="post-block grid">
    <el-aside width="30%"> 
        <UserAsideBlock
        :userId="userId"
        :userName="userName"
        :userSpeak="userSpeak"
        :userCount="userCount">

        </UserAsideBlock>
    </el-aside>

    <el-container class="gird">
        <el-main>
          <markdown-it-vue class="md-body" :content="content" />
        </el-main>

        <el-footer>
          <div>
            <a href="" class = "comment-item text" style="float:right">删除</a>
          </div>
        </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import UserAsideBlock from "@/components/user/asideBlock.vue"
    export default {
        name: 'PostBlock',
        components : {
            UserAsideBlock,
            MarkdownItVue
        },
        props: {
            commentId : String,
            commentContent : String,
            conmentReply : String,
            userId : String,
            userName : String,
            userSpeak : String,
            userCount : String,
        },
        data() {
          return {
            commentId : "",
            content : this.commentContent,
            commentContent : "",
            conmentReply : "",
            userId : "",
            userName : "",
            userSpeak : "",
            userCount : "",
          }
        },
        computed : {
        },
    }
</script>

<style>
.grid {
    border:1px solid #000;
}


.text{
    margin-right:10px;
    margin-left:10px;
}

.comment-item {
    color: black;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}

</style>
