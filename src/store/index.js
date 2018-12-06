import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    show: false
  },
  mutations: {
    hide(state) {
      state.show = false
    },
    show(state) {
      state.show = true
    }
  },
  actions: {
    hide_home ({commit}) {
      commit('hide')
    },
    show_home ({commit}) {
      commit('show')
    }
  },
})