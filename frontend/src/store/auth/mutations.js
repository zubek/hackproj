const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setCurrentUser(state, payload) {
    state.currentUser = payload;
  },
  setEmail(state, payload) {
    state.email = payload;
  },
  setRole(state, payload) {
    state.role = payload;
  },
  createUser(state, payload) {
    state.users.push(payload);
  },
  loadUsers(state, payload) {
    state.users = payload;
  },
  linksByRole(state, payload) {
    state.links = state.links.filter(link => (link.role = payload));
  },
  filterUser(state, payload) {
    state.currentUser = state.users.filter(user => (user.email = payload));
  }
};

export default mutations;
