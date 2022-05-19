<template>
  <div id="app">
    <UserBar/>
    <router-view >

    </router-view>
  </div>
</template>

<script>
import UserBar from "@/components/user/bar.vue"
  export default ({
    components: {
      UserBar
    },
    name: "App"
  })
</script>


<style lang="scss">

</style>
