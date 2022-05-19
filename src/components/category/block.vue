<template>
  <el-container class="category-block grid">
    <div>
        <a>{{name}}</a>
        <a>{{categoryer}}</a>
    </div>
    <div>
        <span class="category-color zero" ></span>
        <a>{{speak}}</a>
        <a>{{follow}}</a>
    </div>
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
  }
}
</script>

<style>
.category-block {
    height : 100%;
    width : 100%
}
.six {
    background-color : #FF0000
}
.five {
    background-color : #FF7F00
}
.four {
    background-color : #8B00FF
}
.three {
    background-color: #0000FF;
}
.one {
    background-color : #00FFFF 
}
.zero {
    background-color : #00FF00 
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
</style>
