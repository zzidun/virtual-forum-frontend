<template>
  <el-container class="user-block grid">
    <el-main>
        <div>
            <a class = "text user-name" :href="`/user/`+id" target="_blank" >zzidun</a><br/>
        </div>
    </el-main>
    <el-footer>
        <div class = "desc-number">
            <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
            <span class="speak text">发言数量: {{speak}}</span>
            <br/>
            <span class="user-color"  :style="{backgroundColor : countColor}"></span>
            <span class="speak text">版块积分: {{count}}</span>
        </div>
    </el-footer>
    
  </el-container>
</template>

<script>
export default {
  name: 'UserAsideBlock',
  props: {
    id : String,
    name : String,
    speak : String,
    count : String,
  },
  computed : {
    speakColor() {
        return this.getColor(this.speak, 10);
    },
    countColor() {
        return this.getColor(this.count, 10);
    },
  }
}
</script>

<style>
.category-block {
    height : 100%;
    width : 100%
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
