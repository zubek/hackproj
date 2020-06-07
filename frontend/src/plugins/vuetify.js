import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1AAFD0", // #1E88E5
        secondary: colors.grey.lighten2, // #E0E0E0
        accent: "#FC636B", // #F4511E
        success: colors.green.accent4,
        warning: "#FFB904"
      }
    }
  }
});
