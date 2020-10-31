// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.http.options.root = 'https://vue-resource-cf573.firebaseio.com'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') request.method = 'PUT'
  next(response => {
    response.json = () => {
      return {
        message: response.body
      }
    }
  })
})

router.beforeEach((to, from, next) => {
  console.log('Global route guards')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
