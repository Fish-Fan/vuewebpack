<template>
  <transition name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight">
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
  </transition>
</template>

<script>
  import router from '@/router'

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
                  console.log(response.data);
                  if(response.data != 'false') {
                      router.push("/");
                  }
              })
          }
      },
      //组件内的钩子
        //渲染组件前被调用
      beforeRouteEnter(to,from,next) {
          //该周期内不可以访问组件中的this对象，访问会返回undefined
          console.log("beforeRouteEnter钩子");
          console.log("是否能访问组件中的this " + this);


          next(vm => {
              console.log("通过vm访问组件中的this");
              console.log(vm);
          });
      },
        //导航离开该组件对应路由前被调用
      beforeRouteLeave(to,from,next) {
          var vm = this;
          if(!vm.check(vm.username,vm.password)) {
              if(confirm("所填信息不完整，确认要离开吗?")) {
                next();
              } else {
                next(false);
              }

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
