<template>
  <el-container class="post-block grid">
    <el-container class = "gird">
        <el-main>
          <v-md-editor v-model="text" height="200px"></v-md-editor>
        </el-main>
        <el-footer>
            <el-button type="primary" @click="submit">回复</el-button>
        </el-footer>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: 'CommentEditor',
        components : {
        },
        props: {
            postId : String,
            refreshPost : {
                type: Function
            }
        },
        data() {
            return {
                text: '',
            };
        },
        computed : {
        },
        methods : {
            submit() {
                this.$axios({
                    method: 'post',
                    url:'/comments',
                    data: JSON.stringify({
                        postid : this.postId,
                        userid : this.$store.getters.userID,
                        content: this.text
                    })
                }).then((res)=>{
                    console.log(res.data)
                    if (res.code == 1000) {
                        const h = this.$createElement;
                        this.$notify({
                            title: '发表成功',
                            message: h('i', { style: 'color: teal'}, '可能刷新后才出现')
                        });
                        this.refreshPost()
                        this.text = ""
                    } else {
                        const h = this.$createElement;
                        this.$notify({
                            title: '发布失败',
                            message: h('i', { style: 'color: teal'}, '请先登陆和检查网络')
                        });
                        this.refreshPost()
                    }
                }).catch((error)=>{
                    console.log(error)
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

.post-name {
    font-size: 24px;
    font-weight:bold;
    text-decoration:none;
}

.post-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid var(--color-primer-border-contrast);
    border-radius: 50%;
}

</style>
