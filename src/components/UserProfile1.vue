//建立此文件目的是问了演示两种不同的异步获取数据的方法
//该种是在导航未完成之前先获取数据
<template>
  <div class="userfile">

    <div class="error" v-if="error">
      {{error}}
    </div>

    <div v-if="user" class="content">
      <p>姓名:{{user.username}}</p>
      <p>密码:{{user.password}}</p>
      <p>ID:{{user.id}}</p>
      <p>性别:{{user.gender}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        error: false,
        user: null
      }
    },
    watch: {
      $route() {
          this.user = null;
          this.$http.get('/api/user/' + this.$route.params.id + '/profile1').then(response => {
              this.user = response.data;
          })
      }
    },
    beforeRouteEnter(to,from,next) {
      next(vm => {
        vm.$http.get('/api/user/'+ to.params.id + '/profile').then(response => {
          if(response.data == undefined) {
            vm.error = "访问出错";
            return false;
          } else {
              vm.user = response.data;
            return true;
          }
        });
      });
    }
  }
</script>
