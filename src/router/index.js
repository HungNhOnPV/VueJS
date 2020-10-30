import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/user/User.vue'
import CompAvatar from '../components/avatar/CompAvatar.vue'
import UserDetail from '../components/user/UserDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: CompAvatar
    },
    {
      path: '/userDetails/:id',
      name: 'userDetail',
      component: UserDetail
    }
  ]
})
