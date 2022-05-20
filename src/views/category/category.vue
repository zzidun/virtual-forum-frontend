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
                        <a class = "text category-name" :href="`/category/`+id" >{{categoryName}}</a>
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
                <a href="" class = "category-item text">看贴</a>
                <a href="" class = "category-item text">Wiki</a>
            </div>
          <div>


            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr v-for="post in postList" :key="post.id">
                <td :width = "colWidth">
                  <PostBlock>
                  </PostBlock>
                </td>
              </tr>
            </table> 

            <div class="block" align="center">
                <el-pagination
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
        categoryName : "",
        categorySpeak : "0",
        categoryFollow : "0",
        wiki : "",
        postTot : 0,
        postCur : 16,
        postList: []
      }
    },
    mounted: function() {
      this.getCategory()
      this.getPostList()
    },
    methods: {
      getCategory() {
        this.$axios({
          method: "get",
          url: "/categories/" + this.$route.params.id,
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            this.categoryName = res.data.name;
            this.categorySpeak = res.data.speak;
            this.categoryFollow = res.data.follow;
            this.wiki = res.data.wiki;
          } else {
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
            left: 0,
            right: 15,
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
        return this.getColor(this.categorySpeak, 100);
      },
      followColor() {
        return this.getColor(this.categoryFollow, 30);
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