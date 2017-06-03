//建立此文件目的是问了演示两种不同的异步获取数据的方法
//该种是在导航完成之后获取数据
<template>
  <div class="userfile">
    <div class="loading" v-if="loading">
      <h2>Loading...</h2>
    </div>

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
          loading: false,
          error: false,
          user: null
      }
    },
    created() {
      this.fetchData();
    },
    watch: {
        //监测route的变化，一有变化调用fetchData
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
          this.error = false;
          this.user = null;
          this.loading = true;
          //动态获取user信息
          this.$http.get('/api/user/'+ this.$route.params.id +'/profile').then(response => {

              this.user = response.data;
              if(this.user != undefined) {
                this.loading = false;
                this.error = false;
              } else {
                  this.error = "访问出错";
                  this.loading = false;
              }
          })
      }
    },

    beforeRouteEnter(to,from,next) {
      next();
    },
    //在当前路由改变，但是该组件被复用前调用
    beforeRouteUpdate(to,from,next) {
      console.log("beforeRouteUpdate: to-> " + to.path);
      console.log("beforeRouteUpdate: from-> " + from.path);
      next();
    },
    beforeRouteLeave(to,from,next) {
      next();
    }
  }
</script>

