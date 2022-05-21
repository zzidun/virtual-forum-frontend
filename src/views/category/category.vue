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
                        <a class = "text category-name" :href="'/category/'+categoryId" >{{categoryName}}</a>
                    </div>
                </el-main>
                <el-footer>
                    <div class = "desc-number" align="center">
                        <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
                        <span class="speak text">发言数量: {{categorySpeak}}</span>
                        <span class="user-color"  :style="{backgroundColor : followColor}"></span>
                        <span class="speak text">关注人数: {{categoryFollow}}</span>
                    </div>
                </el-footer>
                
                </el-container>
            </div>

            <div class="browse-bar">
                <a :href="'/category/'+categoryId" class = "category-item text">看帖</a>
                <a :href="'/post/'+wiki" class = "category-item text">Wiki</a>
                <a v-if="!isFollowed" href="javascript:void(0)" class = "category-item text" @click="followCategory">关注</a>
                <a v-if="isFollowed" href="javascript:void(0)" class = "category-item text" @click="unfollowCategory">取消关注</a>
                <a href="javascript:void(0)" class = "category-item text" style="float:right" @click="postPostVisible = true" >发帖</a>
                <a href="javascript:void(0)" class = "category-item text" style="float:right" @click="setWikiVisible = true" >设置wiki</a>

                <el-dialog title="发布新帖" :visible.sync="postPostVisible">
                    <el-form :model="postForm">
                        <el-form-item label="帖子标题" :label-width="formLabelWidth">
                        <el-input v-model="postForm.title" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="postPostVisible = false">取 消</el-button>
                        <el-button type="primary" @click="postPostVisible = false; submit()">确 定</el-button>
                    </div>
                </el-dialog>

                <el-dialog title="设置wiki帖" :visible.sync="setWikiVisible">
                    <el-form :model="wikiForm">
                        <el-form-item label="帖子id" :label-width="formLabelWidth">
                            <el-input v-model="wikiForm.postId" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="setWikiVisible = false">取 消</el-button>
                        <el-button type="primary" @click="setWikiVisible = false; setWiki()">确 定</el-button>
                    </div>
                </el-dialog>

            </div>


            <div>
                <table cellspacing="0" cellpadding="0" width = "100%">
                <tr v-for="post in postList" :key="post.id">
                    <td :width = "colWidth">
                    <PostBlock
                        :postTime="post.ctime"
                        :replyTime="post.utime"
                        :postId="post.id"
                        :postTitle="post.title"
                        :postSpeak="post.speak"
                        :userId="post.user.id"
                        :userName="post.user.name"
                        :userSpeak="post.user.speak"
                        :userCount="post.user.count"
                        >
                    </PostBlock>
                    </td>
                </tr>
                </table> 

                <div class="block" align="center">
                    <el-pagination
                        @current-change="pageChange"
                        layout="prev, pager, next"
                        :total="postTot"
                        :page-size="16">
                    </el-pagination>
                </div>
            </div>

          </div>

          
          
        </td>
        <td class="aside grid"></td>
      </tr>
    </table> 
</template>

<script>
import PostBlock from "@/components/post/block.vue"
  export default {
    name: "Category",
    components: {
      PostBlock
    },
    props: {
    },
    data() {
      return {
        curPage : 1,
        followed : false,
        setWikiVisible : false,
        postPostVisible : false,
        categoryId : 0,
        categoryName : "",
        categorySpeak : "0",
        categoryFollow : "0",
        wiki : "",
        postTot : 0,
        postCur : 16,
        postList: [],
        postForm : {
          title: '',
        },
        wikiForm : {
          postId: '',
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          postId: [
            { required: true, message: '请输入帖子id', trigger: 'blur' }
          ],
        }
      }
    },
    mounted: function() {
      this.getCategory()
      this.getPostList()
    },
    methods: {
        pageChange(val) {
            this.curPage = val;
            this.getPostList();
        },
      submit() {
        this.$axios({
          method: "post",
          url: "/posts",
          data: JSON.stringify({
            categoryid: this.categoryId,
            title: this.postForm.title,
            userid : this.$store.getters.userID
          })
        }).then((res)=>{
          console.log(res.data)
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
                title: '发布成功',
                message: h('i', { style: 'color: teal'}, '可能需要刷新才出现')
            });
            this.getCategory()
            this.getPostList()
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '发布失败',
                message: h('i', { style: 'color: teal'}, '请检查网络和登陆状态')
            });
            this.getCategory()
            this.getPostList()
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      setWiki() {
        this.$axios({
          method: "post",
          url: "/wiki",data: JSON.stringify({
            categoryid: this.categoryId,
            postid : this.wikiForm.postId
          })
        }).then((res)=>{
          console.log(res.data)
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
                title: '设置成功',
                message: h('i', { style: 'color: teal'}, '可能需要刷新才出现')
            });
            this.getCategory()
          } else {
            const h = this.$createElement;
            this.$notify({
                title: '设置失败',
                message: h('i', { style: 'color: teal'}, '请确认权限和帖子id正确')
            });
            console.log(res.msg)
            this.getCategory()
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      getCategory() {
        this.$axios({
          method: "get",
          url: "/categories/" + this.$route.params.id,
        }).then(res => {
          console.log(res.data, 222);
          this.categoryId = this.$route.params.id;
          if (res.code == 1000) {
            this.followed = res.data.followed;
            this.categoryName = res.data.name;
            this.categorySpeak = res.data.speak;
            this.categoryFollow = res.data.follow;
            this.wiki = res.data.wiki;
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '访问失败',
              message: h('i', { style: 'color: teal'}, '这个版块不存在哦')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getPostList() {
        this.$axios({
          method: "get",
          url: "/posts",
          params: {
            category: this.$route.params.id,
            left: (this.curPage - 1) * 16,
            right: (this.curPage) * 16,
          }
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            this.postTot = Number(res.data.tot);
            this.postCur = Number(res.data.cur);
            this.postList = res.data.list;
          } else {
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      followCategory() {
        this.$axios({
          method: "post",
          url: "/follows",
          params: {
            category: this.$route.params.id,
          }
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
              title: '关注成功',
              message: h('i', { style: 'color: teal'}, '关注成功')
            });
            console.log(res.msg);
            this.getCategory();
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '关注失败',
              message: h('i', { style: 'color: teal'}, '可能没登陆或者版块不存在')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      unfollowCategory() {
        this.$axios({
          method: "delete",
          url: "/follows/" + this.followed
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            const h = this.$createElement;
            this.$notify({
              title: '取关成功',
              message: h('i', { style: 'color: teal'}, '取关成功')
            });
            console.log(res.msg);
            this.getCategory();
          } else {
            const h = this.$createElement;
            this.$notify({
              title: '操作失败',
              message: h('i', { style: 'color: teal'}, '可能没登陆或者版块不存在')
            });
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })

      },
      
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
        return this.getColor(this.categorySpeak, 100);
      },
      followColor() {
        return this.getColor(this.categoryFollow, 30);
      },
      isFollowed() {
          return this.followed != "0";
      }
    }
    
  }
  
</script>

<style>
.text{
    margin-right:10px;
    margin-left:10px;
}

.category-name {
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
.category-item {
    color: black;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    text-decoration:none;
}

</style>