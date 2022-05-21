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

    <el-container class = "gird">
        <el-main>
            <div>
                <a class = "text post-name" :href="`/post/`+postId" target="_blank" >{{postTitle}}</a>
            </div>
        </el-main>
        <el-footer>
            <span class="post-color"  :style="{backgroundColor : postColor}"></span>
            <span class="speak text">回复数: {{postSpeak}}</span>
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
        },
        data() {
            return {
                postId : "",
                postTitle : "",
                postSpeak : "",
                userId : "",
                userName : "",
                userSpeak : "",
                userCount : "",
            };
        },
        computed : {
            postColor() {
                return this.getColor(this.postSpeak, 30);
            }
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
