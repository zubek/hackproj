import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";
import vuetify from "./plugins/vuetify";
import YmapPlugin from "vue-yandex-maps";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDSMQwn3LlG2uRUTOPO28YSnS8FiEC6kMc",
  authDomain: "ckbrt-1523613577605.firebaseapp.com",
  databaseURL: "https://ckbrt-1523613577605.firebaseio.com",
  projectId: "ckbrt-1523613577605",
  storageBucket: "ckbrt-1523613577605.appspot.com",
  messagingSenderId: "991457606943",
  appId: "1:991457606943:web:ee80dc591be9753951c42a",
  measurementId: "G-ZZDGG0BZWH"
};

Vue.use(YmapPlugin, settings);
const settings = {
  apiKey: "8b6ea111-2e4d-4444-b5bf-a9845e2fad38",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1"
};
new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('setUser', user)
      }
    })
  },
  render: h => h(App)
}).$mount("#app");
