<template>
  <GmapMap
      :center="center"
      :zoom="zoom"
      :map-type-id="type_id"
  >
    <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    >

    </GmapMarker>
  </GmapMap>
</template>


<script>
  export default {
    name: "my-map",
    props: {
      zoom: {
        type: Number,
        default() {
          return 7
        }
      },
      type_id:{
        type: String,
        default(){
          return "terrain"
        }
      },
      center: {
        type: Object,
        default() {
          return {
            lat: 10,
            lng: 10
          }
        }
      },
      markers: {
        type: Array,
        default() {
          return [
            {lat: 10, lng: 10}
          ]

        }
      }
    }
  }

</script>

<style scoped lang="sass">
  .vue-map-container
    justify-content: center
    align-items: center
    width: 100%
    height: 100%

</style>