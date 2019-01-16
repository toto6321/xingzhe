<template>
  <el-upload
      :before-upload="handleBeforeUpload"
      :file-list="fileList"
      action="https://jsonplaceholder.typicode.com/posts/"
      class="upload-demo"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      list-type="picture"
  >
    <el-button size="small" type="primary">upload</el-button>
    <div class="el-upload__tip" slot="tip">
      <p>only jpg and png are allowed</p>
      <p>with size limitation of 500kb</p>
    </div>
  </el-upload>
</template>

<script>
  import EXIF from 'exif-js'

  export default {
    name: "FileUpload",
    data() {
      return {
        fileList: [],
        latLng: {'lat': 361, 'lng': 361},
        datetime_original: undefined
      }
    },
    methods: {
      handleRemove(file, fileList) {
        // console.log(file, fileList)
      },
      handlePreview(file) {
        // console.log(file)
      },
      handleBeforeUpload(image) {
        const self = this;
        EXIF.getData(image, function () {
            const gps_latitude_array = EXIF.getTag(this, "GPSLatitude");
            const gps_latitude_ref = EXIF.getTag(this, "GPSLatitudeRef");
            const gps_longitude_array = EXIF.getTag(this, "GPSLongitude");
            const gps_longitude_ref = EXIF.getTag(this, "GPSLongitudeRef");

            // let latLng = {'lat': 360, 'lng': 360}
            let lat = 0;
            let lng = 0;
            const lat_positive_ref = 'N';
            const lng_positive_ref = 'E';

            if (gps_longitude_ref !== undefined && gps_latitude_array !== undefined) {
              lat = gps_latitude_array[0] + gps_latitude_array[1] / 60.0 + gps_latitude_array[2] / 3600.0;
              lat = lat_positive_ref === gps_latitude_ref ? lat : -lat;
              lng = gps_longitude_array[0] + gps_latitude_array[1] / 60.0 + gps_longitude_array[2] / 3600.0;
              lng = lng_positive_ref === gps_longitude_ref ? lng : -lng
            }
            self.latLng.lat = lat;
            self.latLng.lng = lng;

            self.datetime_original = EXIF.getTag(this, "DateTimeOriginal");

            self.$store.dispatch({
              type: 'set_markers',
              markers: [
                {position: self.latLng, title: 'china'}
              ]
            })
            // console.log(self.$store.getters.get_markers)
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>