<template>
  <div class="login">
    <router-link to="/">返回首页</router-link>
    <div class="input-wrap">
      <input type="text" v-model="username">
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>

    <div class="input-wrap">
      <input type="password" v-model="password">
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>

    <div class="input-wrap">
      <button @click="login">提交</button>
    </div>
  </div>
</template>

<script>
  
  import VueResource from 'vue-resource'
  export default {
      data () {
          return {
              username: '',
              password: '',
              error: {
                  name: '',
                  pwd: ''
              }
          }
      },
      methods: {
          check(username,password) {
              if(!username) {
                  this.error.name = '请输入姓名';
                  return false;
              }

              if(!password) {
                  this.error.pwd = '请输入密码';
                  return false;
              }
          },

          login() {
              var reqBody = {
                  username: this.username,
                  password: this.password
              }
              this.$http.post('/api/auth/login',reqBody).then(response => {
                  if(response.data != 'false') {
                      $router.push("/");
                  }
              })
          }
      }
  }
</script>

<style scoped>
  .login {
    width: 300px;
    margin: 10% auto;
  }
</style>
