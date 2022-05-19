<template>
    <el-container class="category">
        <div>
            <el-row>
                <el-col>
                    <div class="linker_block">
                        <el-link type="primary"> 帖子 </el-link> |
                        <el-link type="primary"> wiki </el-link>
                    </div>
                </el-col>
                <el-col>
                    <Article_Overview title = "帖1" intro="内容摘要1内容摘要1内容摘要1内容摘要1">
                    </Article_Overview>
                </el-col>
                <el-col>
                    <Article_Overview title = "帖2" intro="内容摘要2内容摘要2内容摘要2内容摘要2">
                    </Article_Overview>
                </el-col>
                <el-col>
                    <Article_Overview title = "帖3" intro="内容摘要4内容摘要3内容摘要3内容摘要3">
                    </Article_Overview>
                </el-col>
                <el-col>
                    <Article_Overview title = "帖4" intro="内容摘要4内容摘要4内容摘要4内容摘要4">
                    </Article_Overview>
                </el-col>
            </el-row>
        </div>
    </el-container>
</template>

<script>
import Article_Overview from "@/components/Aritcle_Overview.vue"
export default {
  components: {
    Article_Overview
  }
}
</script>

<style>
.linker_block {
    text-align: center;
}
.el-link {
  font-size:24px;
}
.el-row {
    height: 100px;
}
</style>