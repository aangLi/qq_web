const state = {
  showLogin: false,
  showRegister: false
}

const mutations = {
  setShowLogin (state) {
    state.showLogin = !state.showLogin
    state.showRegister = false
  },
  setShowRegister (state) {
    state.showRegister = !state.showRegister
    state.showLogin = false
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
