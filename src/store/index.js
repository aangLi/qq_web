import Vue from 'vue'
import Vuex from 'vuex'
import homeSwitch from './modules/home/home_switch.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homeSwitch
  }
})
