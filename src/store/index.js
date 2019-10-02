import Vue from 'vue'
import Vuex from 'vuex'

import objects from './modules/objects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    objects
  },
  strict: process.env.NODE_ENV === 'development'
})
