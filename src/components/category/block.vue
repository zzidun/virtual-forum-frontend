<template>
  <el-container class="category-block grid">
    <el-header>
        <div align="center">
            <a class = "text category-name" :href="'/category/'+id" target="_blank" >{{name}}</a>
        </div>
    </el-header>
    <el-main>
        <div align="center">
            <a class = "text categoryer-name" :href="'/user/'+categoryerId">版主: {{categoryer}}</a>
        </div>
    </el-main>
    <el-footer>
        <div class = "desc-number" align="center">
            <span class="category-color"  :style="{backgroundColor : speakColor}"></span>
            <span class="speak text">发言数量: {{speak}}</span>
            <br/>
            <span class="category-color"  :style="{backgroundColor : followColor}"></span>
            <span class="follow text">关注人数: {{follow}}</span>
        </div>
    </el-footer>
    
  </el-container>
</template>

<script>
export default {
  name: 'CategoryBlock',
  props: {
    id : String,
    name : String,
    speak : String,
    follow : String,
    categoryer : String,
    categoryerId : String
  },
  data() {
    return { 
    }
  },
  computed : {
    speakColor() {
        return this.getColor(this.speak, 100);
    },
    followColor() {
        return this.getColor(this.follow, 30);
    }
  }
}
</script>

<style>
.category-block {
    height : 100%;
    width : 100%
}

.category-color {
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

.category-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}

.categoryer-name {
    font-weight:bold;
    text-decoration:none;
}


</style>
