<template>
  <GmapMap
      :center="map_center"
      :map-type-id="map_type_id"
      :zoom="map_zoom"
  >
    <GmapMarker
        @click="click_marker"
        v-for="(m, index) in markers"
        :position="m.position"
        :title="m.title"
        :key="index"
        :clickable="true"
        :draggable="true"
    >

    </GmapMarker>
  </GmapMap>
</template>


<script>
  export default {
    name: "my-map",
    data() {
      return {
        map_center: this.center,
        map_type_id: this.type_id,
        map_zoom: this.zoom
      }
    },
    methods: {
      click_marker: function (event) {
        this.map_center = event.latLng;
        this.map_zoom++
      }
    },
    props: {
      zoom: {
        type: Number,
        default() {
          return 3
        }
      },
      type_id: {
        type: String,
        default() {
          return "terrain"
        }
      },
      center: {
        type: Object,
        default() {
          return {
            lat: 45,
            lng: -85
          }
        }
      },
      markers: {
        type: Array,
        default() {
          return [
            {position: {lat: 30, lng: 0}, title: 'E'}
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