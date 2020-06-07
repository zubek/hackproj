const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setInfo(state, payload) {
    state.info = payload;
  },
  clearError(state) {
    state.error = null;
  },
  clearInfo(state) {
    state.info = null;
  }
};

export default mutations;
