import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  loading: false,
  error: null,
  info: null
};

export default {
  state,
  getters,
  actions,
  mutations
};
