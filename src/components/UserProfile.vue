<template>
  <p>profile</p>
</template>

<script>
  export default {
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
