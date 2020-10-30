import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/user/User.vue'
import CompAvatar from '../components/avatar/CompAvatar.vue'
import UserDetail from '../components/user/UserDetail.vue'
import UserStart from '../components/user/Index.vue'
import UserEdit from '../components/user/UserEdit.vue'
import CompHeader from '../components/layout/CompHeader.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      components: {
        default: HelloWorld,
        'comp-header': CompHeader
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: '',
          name: 'index',
          component: UserStart
        },
        {
          path: ':id',
          name: 'userDetails',
          component: UserDetail
        },
        {
          path: ':id/edit',
          name: 'userEdit',
          component: UserEdit
        }
      ]
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: CompAvatar
    },
    {
      path: '/auth-redirect',
      redirect: { name: 'helloWorld' }
    }
  ]
})
