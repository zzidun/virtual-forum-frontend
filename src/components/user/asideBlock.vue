<template>
  <el-container class="user-block grid">
    <el-main>
        <div>
            <a class = "text user-name" :href="`/user/`+userId" target="_blank" >{{userName}}</a><br/>
        </div>
    </el-main>
    <el-footer>
        <div class = "desc-number">
            <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
            <span class="speak text">发言数量: {{userSpeak}}</span>
            <br/>
            <span class="user-color"  :style="{backgroundColor : countColor}"></span>
            <span class="speak text">版块积分: {{userCount}}</span>
        </div>
    </el-footer>
    
  </el-container>
</template>

<script>
export default {
  name: 'UserAsideBlock',
  props: {
    userId : String,
    userName : String,
    userSpeak : String,
    userCount : String,
  },
    data() {
        return {
            userId : "",
            userName : "",
            userSpeak : "",
            userCount : "",
        };
    },
  computed : {
    speakColor() {
        return this.getColor(this.userSpeak, 10);
    },
    countColor() {
        return this.getColor(this.userCount, 10);
    },
    log() {
        console.log(this.userName)
    }
  }
}
</script>

<style>
.user-block {
    height : 100%;
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

.text{
    margin-right:10px;
    margin-left:10px;
}

.user-name {
    font-size: 24px;
    font-weight:bold;
    text-decoration:none;
}

.grid {
    border:1px solid #000;
}

</style>
