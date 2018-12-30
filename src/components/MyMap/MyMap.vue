<template>
  <GmapMap
      :center="center"
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
</template>

<script>
  export default {
    name: "MyMap",
    props: {
      center: Object,
      markers: Array
    }

  }
</script>

<style scoped lang="sass">
  @import index
</style>