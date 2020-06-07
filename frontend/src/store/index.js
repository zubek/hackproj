import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth/index";
import shared from "./shared/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  modules: {
    auth,
    shared
  }
});
