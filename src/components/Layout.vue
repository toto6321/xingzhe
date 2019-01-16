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
          <FileUpload></FileUpload>
        </el-card>
      </el-aside>
      <el-main>
        <my-map :center="center" :markers="markers" :zoom="zoom"></my-map>
      </el-main>
    </el-container>
    <el-footer>
      <strong>xingzhe</strong>
    </el-footer>
  </el-container>
</template>

<script>
  import MyMap from "./MyMap";
  import FileUpload from "./FileUpload";

  export default {
    name: "Layout",
    components: {FileUpload, MyMap},
    data: function () {
      return {
        zoom: 3,
        center: {
          lat: 30,
          lng: 0
        }
      }
    },
    computed: {
      markers: function () {
        return this.$store.getters.get_markers
      }
    }
  }
</script>

<style scoped lang="sass">
  .layout
    height: 1200px

    .el-header
      width: 100%
      max-height: 10vh
      background-color: aquamarine
      display: flex
      justify-content: center


    .el-container
      width: 100%
      height: 100%


      .el-aside
        width: 5%
        background-color: antiquewhite


      .el-main
        width: 95%
        display: flex

    .el-footer
      width: 100%
      max-height: 8vh
      background-color: cadetblue
      display: flex
      justify-content: center

</style>