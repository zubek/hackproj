<template>
  <v-app>
    <Drawer />
    <Header />
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Drawer from "@/components/Drawer.vue";
export default {
  name: "App",

  components: {
    Header,
    Drawer
  },

  data: () => ({
    //
  })
};
</script>
