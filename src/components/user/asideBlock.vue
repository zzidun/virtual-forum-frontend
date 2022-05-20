<template>
  <el-container class="user-block grid">
    <el-main>
        <div>
            <a class = "text user-name" href="/user/:id" target="_blank" >{{name}}</a>
        </div>
    </el-main>
    <el-footer>
        <div class = "desc-number">
            <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
            <span class="speak text">发言数量: {{speak}}</span><br/>
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
  },
  computed : {
    speakColor() {
        return this.getColor(this.speak, 100);
    },
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
