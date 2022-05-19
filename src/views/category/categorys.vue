<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <div>
            <div>
            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块1" categoryer="zzidun" speak="100" follow="100">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块2" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块3">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块4" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块5">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块6" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块7">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块8" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块1">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块2" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块3">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块4" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块5">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块6" >
                  </CategoryBlock>
                </td>
              </tr>

              <tr :height = "rowHeight">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块7">
                  </CategoryBlock>
                </td>
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock name="板块8" >
                  </CategoryBlock>
                </td>
              </tr>
            </table> 
            </div>

            <div class="block" align="center">
              <el-pagination
                layout="prev, pager, next"
                :total="16"
                :page-size="16">
              </el-pagination>
            </div>

          </div>

          
          
        </td>
        <td class="aside grid"></td>
      </tr>
    </table> 
</template>

<script>
import CategoryBlock from "@/components/category/block.vue"
  export default {
    name: "Categorys",
    components: {
      CategoryBlock
    },
    methods: {
    },
    computed: {
      tableHeight: function() {
        return (window.innerHeight) + 'px';
      },
      tableWidth: function() {
        return (window.innerWidth) + 'px';
      },
      rowHeight: function() {
        return (window.innerWidth) / 6 + 'px';
      },
      colWidth: function() {
        return (window.innerWidth) / 4 + 'px'
      }
    }
    
  }
  
</script>

<style>


</style>