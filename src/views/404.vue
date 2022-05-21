<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <markdown-it-vue class="md-body" :content="notFound" />
        </td>
        <td class="aside grid"></td>
      </tr>
    </table> 
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
  export default {
    components: {
      MarkdownItVue
    },
    data() {
      return {
        notFound: '# 页面找不到了! '
      }
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