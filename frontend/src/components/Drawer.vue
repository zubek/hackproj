<template>
  <v-navigation-drawer app width="300"  permanent>
    <v-container align="center" justify="center">
      <template v-if="isUserLoggedIn">
        <UserPhotoCard/>
      </template>
      <template v-else>
        <LogoCardAltai/>
        <Auth/>
        <div class="mt-10">
          <p class="text-center grey--text">Войти через социальную сеть</p>
          <Social />
        </div>
      </template>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
import Social from "@/components/SocialIcons.vue";
import LogoCardAltai from "@/components/LogoCardAltai.vue";
import Auth from "@/components/Auth.vue";
import UserPhotoCard from "@/components/UserPhotoCard.vue";
export default {
  data: () => ({
    //
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
   //
  },
  created() {
    if (this.$route.query["loginError"]) {
      this.$store.dispatch(
        "setError",
        "Доступ к странице запрещен! Пожалуйста авторизуйтесь для доступа!"
      );
    }
  },
  components: {
    Auth,
    Social,
    LogoCardAltai,
    UserPhotoCard
  }
};
</script>

<style lang="css" scoped>
.avatar {
  text-align: center;
}
.social-icon {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
