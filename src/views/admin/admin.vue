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
    components: {
      MarkdownItVue
    },
    data() {
      return {
        about: ''
      }
    },
    created() {
      this.getAbout();
    },
    methods: {
      getAbout() {
        this.$axios({
          method: 'get',
          url:'/about',
        }).then((res)=>{
          console.log(res.data)
          if (res.code == 1000) {
            this.about = res.data.about
          }
        }).catch((error)=>{
            const h = this.$createElement;
            this.$notify({
            title: '网络错误',
            message: h('i', { style: 'color: teal'}, '请检查网络')
            });
          console.log(error)
        })
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