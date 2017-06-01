import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import User from '@/components/User'
import LeftBar from '@/components/LeftBar'
import RightBar from '@/components/RightBar'

Vue.use(Router);

const UserProfile = {template:'<div>Profile</div>'}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: Main,
        view1: LeftBar,
        view2: RightBar
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile
        },
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
