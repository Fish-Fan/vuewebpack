// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//配置应用的js文件
//引入所需要的各个依赖
import Vue from 'vue'
import router from './router'
import App from './App'
import './../dist/static/css/animate.css'

//当前js虽然用不到,但是后面的login.vue中的this指向该实例(当前js),所以需要引入vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(router);

new Vue({
  el: '#app',
  //router: router的简写
  router,
  //模板取自App.vue中的template
  template: '<App/>',
  //应用组件
  components: {App}
  //router启动方法，并且将挂载至#appDOM元素上
}).$mount('#app');




