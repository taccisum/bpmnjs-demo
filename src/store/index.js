import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var DEFAULT = true
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    show: DEFAULT
  },
  mutations: {
    hide (state) {
      state.show = false
    },
    show (state) {
      state.show = true
    },
    reset (state) {
      state.show = DEFAULT
    }
  },
  actions: {
    hide_home ({commit}) {
      commit('hide')
    },
    show_home ({commit}) {
      commit('show')
    },
    reset_home ({commit}) {
      commit('reset')
    }
  }
})
