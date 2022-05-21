<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
    <tr>
        <td class="aside grid"></td>
        <td class="main grid"  valign="top">
          <div>
            <el-container class="user-block grid">
              <el-main>
                <div align="center">
                  <span class = "text category-name" >{{userName}}</span>
                </div>
              </el-main>
              <el-footer>
                <div class = "desc-number" align="center">
                  <span class="user-color"  :style="{backgroundColor : speakColor}"></span>
                  <span class="speak text">发言数量: {{categorySpeak}}</span>
                </div>
              </el-footer>
            </el-container>

            <div class="browse-bar" align="center">
                <a href="'/category/'+categoryId" class = "category-item text">屏蔽他</a>
            </div>
          </div>
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
    data() {
      return {
        userName : "NaN",
      }
    },
    mounted: function() {
      this.getUser()
    },
    methods: {
      getUser() {

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