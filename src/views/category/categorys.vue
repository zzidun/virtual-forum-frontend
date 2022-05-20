<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <div>
            <div>

            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr v-for="(category1, category2) in categoryList" :key="category1.id">
                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock
                    :id="category1.id"
                    :name="category1.name"
                    :categoryer="category1.categoryer"
                    :speak="category1.speak"
                    :follow="category1.follow">
                  </CategoryBlock>
                </td>

                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock v-if="!category2.id == 0"
                    :id="category2.id"
                    :name="category2.name"
                    :categoryer="category2.categoryer"
                    :speak="category2.speak"
                    :follow="category2.follow">
                  </CategoryBlock>
                </td>

              </tr>
            </table> 
            </div>

            <div class="block" align="center">
              <el-pagination
                layout="prev, pager, next"
                :total="categoryTot"
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
    data() {
      return {
        categoryTot : 0,
        categoryCur : 16,
        categoryList: []
      }
    },
    mounted: function() {
      this.getCategoryList()
    },
    methods: {
      pageSwitch() {

      },
      getCategoryList() {
        this.$axios({
          method: "get",
          url: "/categories",
          params: {
            left: 0,
            right: 15,
          }
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            this.categoryTot = Number(res.data.tot);
            this.categoryCur = Number(res.data.cur);
            this.categoryList = res.data.list;
          } else {
            console.log(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      }
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