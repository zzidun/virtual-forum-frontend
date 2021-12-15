<template>
    <el-container class="categorys">
        
        <el-row>
            <el-col :span="12">
                <div>
                    <Category_Overview name="板块1" intro="asdasdasdasdasdasdasdasdasdsa">
                    </Category_Overview>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <Category_Overview name="板块2" intro="asdasdasdasdasdasdasdasdasdsa">
                    </Category_Overview>
                </div>
            </el-col>
        <!-- </el-row>
        <el-row> -->
            <el-col :span="12">
                <div>
                    <Category_Overview name="板块3" intro="asdasdasdasdasdasdasdasdasdsa">
                    </Category_Overview>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <Category_Overview name="板块4" intro="asdasdasdasdasdasdasdasdasdsa">
                    </Category_Overview>
                </div>
            </el-col>
        </el-row>

    </el-container>
</template>

<script>
import Category_Overview from "@/components/Category_Overview.vue"
export default {
  components: {
    Category_Overview
  }
}
</script>

<style>
.el-row {
    height: 100px;
}
</style>