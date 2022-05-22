<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <div>

            <div>
                <el-container class="user-block grid">
                <el-main>
                    <div align="center">
                        <a class = "text post-name" :href="'/post/'+postId" >{{postTitle}}</a>
                    </div>
                </el-main>
                <el-footer>
                    <div class = "desc-number" align="center">
                        <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
                        <span class="speak text">回复数量: {{postSpeak}}</span>
                    </div>
                </el-footer>
                
                </el-container>
            </div>

            <div class="browse-bar">
                <a :href="'/category/'+categoryId" class = "post-item text" target="_blank" >看帖</a>
                <a href="javascript:void(0)" class = "post-item text" style="float:right" @click="deletePostVisible = true">删帖</a>

                <el-dialog title="删除此帖" :visible.sync="deletePostVisible">
                <el-form :model="postForm">
                    <el-form-item label="确定删除这个帖子吗(回复也都会消失)" :label-width="formLabelWidth">
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="deletePostVisible = false">取 消</el-button>
                    <el-button type="primary" @click="deletePostVisible = false; deletePost()">确 定</el-button>
                </div>
                </el-dialog>
            </div>
          <div>


            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr v-for="(comment, i) in commentList" :key="i">
                <td :width = "colWidth">
                  <CommentBlock
                    :number="(curPage - 1) * 16 + i + 1"
                    :refreshPost="refreshPost"
                    :commentTime="comment.ctime"
                    :commentId="comment.id"
                    :commentContent="comment.content"
                    :commentReply="comment.replyid"
                    :userId="comment.user.id"
                    :userName="comment.user.name"
                    :userSpeak="comment.user.speak"
                    :userCount="comment.user.count"
                    >
                  </CommentBlock>
                </td>
              </tr>
                <tr v-if="commentCur == 0">
                    <td :width = "colWidth">
                        <NotFoundBlock>
                        </NotFoundBlock>
                    </td>
                </tr>
            </table> 

                <div class="block" align="center">
                    <el-pagination
                        @current-change="pageChange"
                        layout="prev, pager, next"
                        :total="commentTot"
                        :page-size="16">
                    </el-pagination>
                </div>
            </div>
            
            <div>
                <CommentEditor
                    :postId="postId"
                    :refreshPost="refreshPost">
                </CommentEditor>
            </div>

          </div>
        </td>
        <td class="aside grid"></td>
      </tr>
    </table> 
</template>

<script>
import CommentBlock from "@/components/comment/block.vue"
import CommentEditor from '@/components/comment/editor.vue'
import NotFoundBlock from  "@/components/404.vue"
  export default {
    name: "Post",
    components: {
        CommentBlock,
        CommentEditor,
        NotFoundBlock
    },
    props: {
    },
    data() {
      return {
        deletePostVisible : false,
        curPage : 1,
        categoryId : "0",
        postId : "0",
        postTitle : "",
        postSpeak : "0",
        commentTot : 0,
        commentCur : 0,
        commentList: []
      }
    },
    mounted: function() {
      this.getPost()
      this.getCommentList()
    },
    methods: {
      pageChange(val) {
        this.curPage = val;
        this.getCommentList();
      },
      deletePost() {
        this.$axios({
          method: "delete",
          url: "/posts/" + this.$route.params.id,
        }).then(res => {
          console.log(res.data, 222);
          this.postId = this.$route.params.id;
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
              title: '删除成功',
              message: h('i', { style: 'color: teal'}, '刷新后无法再访问')
            });
            this.getPost()
            this.getCommentList()
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '删除失败',
              message: h('i', { style: 'color: teal'}, '你可能没有删除权限')
            });
            this.getPost()
            this.getCommentList()
          }
        }).catch(err => {
          console.log(err)
        })
      },
      refreshPost() {
        this.getPost()
        this.getCommentList()
      },
      getPost() {
        this.$axios({
          method: "get",
          url: "/posts/" + this.$route.params.id,
        }).then(res => {
          console.log(res.data, 222);
          this.postId = this.$route.params.id;
          if (res.code == 1000) {
            this.categoryId = res.data.category;
            this.postTitle = res.data.title;
            this.postSpeak = res.data.speak;
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '访问失败',
              message: h('i', { style: 'color: teal'}, '这个帖子不存在哦')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getCommentList() {
        this.$axios({
          method: "get",
          url: "/comments",
          params: {
            post: this.$route.params.id,
            left: (this.curPage-1)*16,
            right: (this.curPage)*16,
          }
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            this.commentTot = Number(res.data.tot);
            this.commentCur = Number(res.data.cur);
            this.commentList = res.data.list;
          } else {
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    computed: {
      tableHeight: function() {
        return (window.innerHeight) + 'px';
      },
      tableWidth: function() {
        return (window.innerWidth) + 'px';
      },
      colWidth: function() {
        return (window.innerWidth) /10 * 8 + 'px'
      },
      speakColor() {
        return this.getColor(this.postSpeak, 100);
      },
    }
    
  }
  
</script>

<style>
.text{
    margin-right:10px;
    margin-left:10px;
}

.post-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}
.user-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid var(--color-primer-border-contrast);
    border-radius: 50%;
}
.browse-bar {
    border:1px solid #000;
    width : 100%;
}
.post-item {
    color: black;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}

</style>