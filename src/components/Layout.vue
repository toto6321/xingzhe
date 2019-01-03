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
        <my-map :center="map_data.center" :markers="map_data.markers"></my-map>
      </el-main>
    </el-container>
    <el-footer>
      <strong>xingzhe</strong>
    </el-footer>
  </el-container>
</template>

<script>
  import MyMap from "./MyMap";

  export default {
    name: "Layout",
    components: {MyMap},
    data: function () {
      return {
        map_data: {
          center: {
            lat: 45,
            lng: -85
          },
          markers: [
            {
              position: {
                lat: 30,
                lng: 120
              }
            }
          ]
        }
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