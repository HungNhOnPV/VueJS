import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CompAvatar from '../components/avatar/CompAvatar.vue'
import CompHeader from '../components/layout/CompHeader.vue'
import CompFooter from '../components/layout/CompFooter.vue'
import NotFound from '../components/notFound/NotFound.vue'

const User = resolve => {
  require.ensure(['../components/user/User.vue'], () => {
    resolve(require('../components/user/User.vue'))
  }, 'user')
}

const UserDetail = resolve => {
  require.ensure(['../components/user/UserDetail.vue'], () => {
    resolve(require('../components/user/UserDetail.vue'))
  }, 'user')
}

const UserStart = resolve => {
  require.ensure(['../components/user/Index.vue'], () => {
    resolve(require('../components/user/Index.vue'))
  }, 'user')
}

const UserEdit = resolve => {
  require.ensure(['../components/user/UserEdit.vue'], () => {
    resolve(require('../components/user/UserEdit.vue'))
  }, 'user')
}

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
        'comp-header': CompHeader,
        'comp-footer': CompFooter
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
