<template>
  <el-upload
      :file-list="fileList2"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      action="https://jsonplaceholder.typicode.com/posts/"
      class="upload-demo"
      list-type="picture">
    <el-button size="small" type="primary">upload</el-button>
    <div class="el-upload__tip" slot="tip">
      <p>only jpg and png are allowed</p>
      <p>with size limitation of 500kb</p>
    </div>
  </el-upload>
</template>

<script>
  export default {
    name: "FileUpload",
    data() {
      return {
        fileList2: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped>

</style>