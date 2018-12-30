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
        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
        >
          <GmapMarker
              :clickable="true"
              :draggable="true"
              :key="index"
              :position="m.position"
              @click="center=m.position"
              v-for="(m, index) in markers"
          >

          </GmapMarker>
        </GmapMap>
      </el-main>
    </el-container>
    <el-footer>
      <strong>xingzhe</strong>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "Layout",
    data: function () {
      return {}
    },
    mounted() {

    }
  }
</script>

<style lang="sass">
  @import index
</style>