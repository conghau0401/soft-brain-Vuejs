import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  message: 'message.misc.welcome',
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
