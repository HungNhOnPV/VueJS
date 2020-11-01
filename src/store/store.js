import Vue from 'vue'
import Vuex from 'vuex'

import Result from './modules/Result'

import * as getters from './Getters'
import * as mutations from './Mutations'
import * as actions from './Actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: ''
  },
  getters,
  mutations,
  actions,
  modules: {
    Result
  }
})
