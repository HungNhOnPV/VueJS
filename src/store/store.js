import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 0,
    value: ''
  },
  getters: {
    tenResult: state => {
      return state.result * 10
    },
    nameResult: state => {
      return state.result + ' name product'
    },
    value: state => {
      return state.value
    }
  },
  mutations: {
    increment: function (state, n) {
      state.result++
    },
    decrement: state => {
      state.result--
    },
    updateValue: (state, payload) => {
      state.value = payload
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit('increment')
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement')
      }, 2000)
    },
    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload)
    }
  }
})
