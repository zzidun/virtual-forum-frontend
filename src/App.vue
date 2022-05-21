<template>
  <div id="app">
    <UserBar v-if="!isAdmin"/>
    <AdminBar v-if="isAdmin"/>
    <router-view >

    </router-view>
  </div>
</template>

<script>
import UserBar from "@/components/user/bar.vue"
import AdminBar from "@/components/admin/bar.vue"
  export default ({
    components: {
      UserBar,
      AdminBar,
    },
    name: "App",
    computed: {
      isAdmin() {
          return this.$route.path.indexOf("admin") >= 0;
      },
    }
  })
</script>


<style lang="scss">

</style>
