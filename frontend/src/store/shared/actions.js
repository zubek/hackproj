const actions = {
  setLoading({ commit }, payload) {
    commit("setLoading", payload);
  },
  setError({ commit }, payload) {
    commit("setError", payload);
  },
  setInfo({ commit }, payload) {
    commit("setInfo", payload);
  },
  clearError({ commit }) {
    commit("clearError");
  },
  clearInfo({ commit }) {
    commit("clearInfo");
  }
};

export default actions;
