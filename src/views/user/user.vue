<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
    <tr>
        <td class="aside grid"></td>
        <td class="main grid">
          

        </td>
        <td class="aside grid"></td>
    </tr>
    </table> 
</template>

<script>
  export default {
    name: "User",
    computed: {
    },
    methods: {
    },
    computed: {
      tableHeight: function() {
        return (window.innerHeight) + 'px';
      },
      tableWidth: function() {
        return (window.innerWidth) + 'px';
      }
    }
    
  }
  
</script>

<style>
</style>