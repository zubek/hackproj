const getters = {
  user(state) {
    return state.user;
  },
  email(state) {
    return state.email;
  },
  isUserLoggedIn(state) {
    return state.user !== null;
  },
  getCurrentUsers(state) {
    return state.currentUser;
  }};

export default getters;
