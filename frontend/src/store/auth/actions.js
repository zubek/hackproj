import * as firebase from "firebase";
class User {
  constructor(
    displayName = "Иванов Иван Иванович",
    email,
    password,
    phoneNumber = null,
    photoURL = "https://image.flaticon.com/icons/svg/2919/2919863.svg",
    uid = null
  ) {
    this.displayName = displayName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.photoURL = photoURL;
    this.uid = uid;
  }
}
const actions = {
  async loginUser({ commit }, payload) {
    commit("clearError");
    commit("setLoading", true);
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);

      commit("setUser", new User(payload));
      commit("setLoading", false);
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
      throw error;
    }
  },
  logoutUser({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          commit("setUser", null);

          console.log("Signed Out");
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
  }
};

export default actions;
