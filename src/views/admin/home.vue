<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <markdown-it-vue class="md-body" :content="about" />
        </td>
        <td class="aside grid"></td>
      </tr>
    </table> 
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
  export default {
    name : "Home",
    components: {
      MarkdownItVue
    },
    data() {
      return {
        about: '# 管理页面 \r\n 如果没有权限,你可以联系其他管理员'
      }
    },
    created() {
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