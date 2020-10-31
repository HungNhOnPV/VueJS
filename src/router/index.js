import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/user/User.vue'
import CompAvatar from '../components/avatar/CompAvatar.vue'
import UserDetail from '../components/user/UserDetail.vue'
import UserStart from '../components/user/Index.vue'
import UserEdit from '../components/user/UserEdit.vue'
import CompHeader from '../components/layout/CompHeader.vue'
import NotFound from '../components/notFound/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
  },
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
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            console.log('Active route guards')
            next()
          }
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
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: 'notFound'
    }
  ]
})
