<template>
  <div class="main">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              msg: 'Welcome to Vue.js'
          }
      }
  }
</script>

<style scoped>
  .main {
    font-size: 14px;
    color: #58666e;
    background-color: #1c2b36;
  }
</style>
