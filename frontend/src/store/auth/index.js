import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  users: [],
  user: null,
  currentUser: null,
  email: null
};

export default {
  state,
  getters,
  actions,
  mutations
}