<template>
  <div class="container">
    <header>
      <img src=".././assets/logo.png">
      <router-link to="/login">登录</router-link>
      <router-link to="/redirectLogin">重定向到登录</router-link>
      <router-link to="/redirectNamedLogin">重定向到命名路由</router-link>
      <router-link to="/api/user/2/profile">/api/user/2/profile</router-link>
    </header>
    <div class="main">
      <h1>{{msg}}</h1>
    </div>
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
