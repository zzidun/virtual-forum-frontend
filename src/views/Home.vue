<template>
  <el-container class="home">
    <el-row>
      <el-col :span="24">
        <div>
          <h1 id="home-title">
            Virutal Forum
          </h1>
        </div>
      </el-col>

      <el-col :span="24">
        <div>
          <p id="home-intro">
            虽然这里有一块空白,应该写一些东西在这里,比如说介绍一下这个网站.
            <br/>
            但是我不知道该写些啥东西.
            <br/>
            所以就这样空着吧
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
#home-title {
  font-size:64px;
}
#home-intro {
  font-size:28px;
}
.home {
  background-color: #fafafa;
}
</style>