<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
    <tr>
        <td class="aside"></td>
        <td class="main">

        </td>
        <td class="aside"></td>
    </tr>
    </table> 
</template>

<script>
  export default {
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