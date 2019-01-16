<template>
    <el-container class="layout">
        <el-header><h3>On my way to ...</h3></el-header>
        <el-container>
            <el-aside>
                <el-card>
                    <img alt="icon" src="">
                    <span></span>
                    <strong>name</strong>
                </el-card>
                <el-card>
                    <el-button>Upload</el-button>
                </el-card>
            </el-aside>
            <el-main>
                <div id="gmap">

                </div>
            </el-main>
        </el-container>
        <el-footer>
            <strong>xingzhe</strong>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style lang="sass">
    @import index
</style>