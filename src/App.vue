<template>
  <div id="app">
    <navbar/>
      <el-container>
        <router-view/>
      </el-container>
  </div>
</template>

<script>
  import Navbar from './views/Navbar.vue'

  export default ({
    components : { Navbar },
    setup() {
    
    },
  })
</script>


<style lang="scss">

</style>
