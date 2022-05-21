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
            <br/>
            <a href="javascript:void(0)" class = "comment-item text" style="float:right" 
              v-clipboard:copy="commentContent"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">复制</a>
            <a href="javascript:void(0)" class = "comment-item text" style="float:right" @click="deleteComment">删除</a>
            <span class="time">{{number}}楼</span>
            <span class="time">回复时间: {{commentTime}}</span>            
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
          number : String,
          commentTime: String,
          commentId : String,
          commentContent : String,
          conmentReply : String,
          userId : String,
          userName : String,
          userSpeak : String,
          userCount : String,
          refreshPost : {
            type : Function
          }
        },
        data() {
          return {
            content : this.commentContent,
          }
        },
        computed : {
        },
        methods : {
          copyComment() {

          },// 复制成功时的回调函数
          onCopy (e) {
          this.$message.success("内容已复制到剪切板！")
          },
          // 复制失败时的回调函数
          onError (e) {
          this.$message.error("抱歉，复制失败！")
          },

          deleteComment() {
            this.$axios({
              method: "delete",
              url: "/comments/" + this.commentId,
            }).then(res => {
              console.log(res.data, 222);
              if (res.code == 1000) {
                const h = this.$createElement;
                this.$notify({
                  title: '删除成功',
                  message: h('i', { style: 'color: teal'}, '刷新后无法再访问')
                });
                this.refreshPost()
              } else {
                const h = this.$createElement;
                this.$notify({
                  title: '删除失败',
                  message: h('i', { style: 'color: teal'}, '你可能没有删除权限')
                });
                console.log(res.msg);
              }
            }).catch(err => {
              console.log(err)
            })
        }
    }
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

.time {
  font-size: 12px;
  font-weight:lighter;
}

</style>
