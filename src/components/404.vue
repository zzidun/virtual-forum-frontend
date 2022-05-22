<template>
  <el-container class="post-block grid">

    <el-container class = "gird">
        <el-main>
            <div>
                <span class= "text post-name">暂时没有内容了...,去其他地方看看吧</span>
                <br/>
            </div>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: 'NotFoundBlock',
        components : {
        },
        props: {
        },
        computed : {
        },
    }
</script>

<style>
.grid {
    border:1px solid #000;
}


.text{
    margin-right:10px;
    margin-left:10px;
}

.post-name {
    font-size: 36px;
    font-weight:bold;
    text-decoration:none;
}

.post-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid var(--color-primer-border-contrast);
    border-radius: 50%;
}

.time {
    font-size: 12px;
    font-weight:lighter;
    float:right;
}
</style>
