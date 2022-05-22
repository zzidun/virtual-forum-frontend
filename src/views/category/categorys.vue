<template>
    <table cellspacing="0" cellpadding="0" :height = "tableHeight" :width = "tableWidth">
      <tr>
        <td class="aside grid"></td>
        <td class="main grid" valign="top">
          <div>
            <div>

            <table cellspacing="0" cellpadding="0" width = "100%">
              <tr v-for="{category1, category2} in categoryList" :key="category1.index">

                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock
                    :id="category1.id"
                    :name="category1.name"
                    :categoryer="category1.categoryer"
                    :categoryerId="category1.categoryerid"
                    :speak="category1.speak"
                    :follow="category1.follow">
                  </CategoryBlock>
                </td>

                <td :height = "rowHeight" :width = "colWidth">
                  <CategoryBlock v-if="!category2 == ''"
                    :id="category2.id"
                    :name="category2.name"
                    :categoryer="category2.categoryer"
                    :categoryerId="category2.categoryerid"
                    :speak="category2.speak"
                    :follow="category2.follow">
                  </CategoryBlock>
                </td>

              </tr>
            </table> 
            </div>

            <div class="block" align="center">
              <el-pagination
                @current-change="pageChange"
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
        curPage : 1,
        categoryTot : 0,
        categoryCur : 16,
        categoryList: []
      }
    },
    mounted: function() {
      this.getCategoryList()
    },
    methods: {
      pageChange(val) {
        this.curPage = val;
        this.getCategoryList();
      },
      getCategoryList() {
        this.$axios({
          method: "get",
          url: "/categories",
          params: {
            left: (this.curPage-1)*16,
            right: (this.curPage)*16,
          }
        }).then(res => {
          console.log(res.data, 222);
          if (res.code == 1000) {
            this.categoryTot = Number(res.data.tot);
            this.categoryCur = Number(res.data.cur);

            for (var index = 0; index < res.data.tot; index+=2) {
              var category1 = res.data.list[index]
              var category2 = ""
              if (index + 1 != res.data.tot) {
                category2 = res.data.list[index+1]
              }
              this.categoryList.push({category1, category2})
            }

            console.log(this.categoryList)

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