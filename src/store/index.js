import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import objects from "./modules/objects";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    objects
  },
  strict: process.env.NODE_ENV === "development"
});
