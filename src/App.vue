<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
  import Layout from "./components/Layout/Layout";

  export default {
    name: 'app',
    components: {
      Layout,
    }
  }
</script>

<style>
  html {
    height: 100vh;
  }

  body {
    min-height: 98vh;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 1% 0;
    min-height: 96vh;
  }
</style>
