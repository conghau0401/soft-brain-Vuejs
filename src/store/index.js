import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import welcome from './modules/welcome'

Vue.use(Vuex)

const modules = {
  welcome,
}

const state = {
  layout: 'div',
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
})
