<template>
  <div>
    <v-app-bar app color="secondary" light>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-btn class="mx-2" to="/" icon large>
        <v-avatar size="48px" item>
          <v-img src="@/assets/logo.png" alt="Логотип Республики Алтай"></v-img
        ></v-avatar>
      </v-btn>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <v-btn
              rounded
              large
              class="mx-5"
              v-for="view in views"
              :key="view.key"
              :color="view.color"
              :to="view.link"
            >
              {{ view.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Поиск"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn class="ml-6" icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="logOut"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    views: [
      {
        name: "Проблемы",
        link: "/problems",
        color: "accent"
      },
      {
        name: "Инициативы",
        link: "/initiative",
        color: "warning"
      },
      {
        name: "Лидеры",
        link: "/leaders",
        color: "success"
      }
    ],
    items: [{ title: "Выход", action: "logOut" }, { title: "Закрыть", action: "logOut" }]
  }),
  methods: {
    logOut() {
      this.$store
        .dispatch("logoutUser", null)
        .then(() => {
          console.log('user log Out')
        })
        .catch(() => {});
    }
  }
};
</script>
