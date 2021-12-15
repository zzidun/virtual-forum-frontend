<template>
    <el-container class="article">
        <div>
            <el-row>
                <el-col>
                    <Comment user_name="zzidun" count = "1F" context="内容内容内容内容">
                    </Comment>
                </el-col>
                <el-col>
                    <Comment user_name="qwe" count = "2F" context="内容内容内容内容">
                    </Comment>
                </el-col>
                <el-col>
                    <Comment user_name="asd" count = "3F" context="内容内容内容内容">
                    </Comment>
                </el-col>
                <el-col>
                    <Comment user_name="zxc" count = "4F to 2F" context="内容内容内容内容">
                    </Comment>
                </el-col>
            </el-row>
        </div>
    </el-container>
</template>

<script>
import Comment from "@/components/Comment.vue"
export default {
  components: {
    Comment
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