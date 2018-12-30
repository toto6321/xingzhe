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
        <MyMap :center="map_data.center" :markers="map_data.markers"></MyMap>
      </el-main>
    </el-container>
    <el-footer>
      <strong>xingzhe</strong>
    </el-footer>
  </el-container>
</template>

<script>
  import MyMap from "../MyMap/MyMap";

  export default {
    name: "Layout",
    components: {MyMap},
    data: function () {
      return {
        map_data: {
          center: {
            lat: 10,
            lng: 10
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
    },
    mounted() {

    }
  }
</script>

<style lang="sass">
  @import index
</style>