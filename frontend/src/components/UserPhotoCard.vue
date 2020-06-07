<template>
  <div class="mt-10 mb-12" align="center" justify="center">
    <p class="display-1 text-center primary--text">
       ВСЕ ВМЕСТЕ
    </p>

    <div class="avatar" elevation="10">
      <v-avatar size="190px" item>
        <v-img
          src="https://www.asdorural.com/upload/iblock/f67/f67e5503d2ac6552299b6e8d82b463eb.png"
          alt="Логотип Республики Алтай"
        ></v-img
      ></v-avatar>
    </div>
    <p class="mt-5 mb-3  text-center primary--text">
      ИВАНОВ ИВАН ИВАНОВИЧ
    </p>
    <Social />
    <v-btn class="mt-10 mb-5" color="primary" rounded>
      Баллы : 350
    </v-btn>
    <hr />
    <v-row class="my-6">
      <v-col sm="6">
        <p class="text-center grey--text">Ваш лидер:</p>
        <v-badge color="success" content="8760">
          БАЛЛЫ
        </v-badge>
        <v-badge color="warning" content="750">
          ДОВЕРЯЮТ
        </v-badge>

        <v-btn class="mt-4" color="warning" rounded>
          Подробнее
        </v-btn>
      </v-col>
      <v-col sm="6">
        <v-avatar class="mt-6" size="120px" item>
          <v-img
            src="https://miro.medium.com/max/768/0*yP4uiG8iVXzjdr7P.png"
          ></v-img
        ></v-avatar>
      </v-col>
    </v-row>
		<hr>
		<p class="text-center grey--text mt-10 mb-6">Получить ежедневный бонус:</p>
		<v-btn class="mt-4" color="success" rounded>
			100 Баллов
		</v-btn>
  </div>
</template>

<script>
import Social from "@/components/SocialIcons.vue";
export default {
  data: () => ({}),
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: {
    Social
  }
};
</script>
