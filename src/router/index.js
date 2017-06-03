import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import User from '@/components/User'
import LeftBar from '@/components/LeftBar'
import RightBar from '@/components/RightBar'
import UserProfile from '@/components/UserProfile'
import UserProfile1 from '@/components/UserProfile1'

Vue.use(Router);


//导出router实例
export default new Router({
  routes: [
    //定义各个路径所映射到的组件,每个组件对应一个.vue文件
    {
      path: '/',
      name: 'Main',
      components: {
        default: Main,
        view1: LeftBar,
        view2: RightBar
      },
      //单个路由钩子
      beforeEnter: (to,from,next) => {
        console.log("to->" + to.name);
        console.log("from->" + from.path);
        next();
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      //嵌套路由
        //动态路径匹配
      path: '/api/user/:id',
      name: 'User',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'profile1',
          component: UserProfile1
        }
        // {
        //   path: 'posts',
        //   component: UserPosts
        // },
        // {
        //   path: '',
        //   component: UserHome
        // }
      ]
    },
    {
      path: '/redirectLogin',
      redirect: '/login '
    },
    {
      path: '/redirectNamedLogin',
      redirect: {
        name: 'Login'
      }
    }
  ]
})
