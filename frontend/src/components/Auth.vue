<template>
  <div class="mt-12 grey--text">
    <v-form ref="form" v-model="valid" validation>
      <p class="text-center">Авторизоваться</p>
      <v-text-field
        dense
        outlined
        type="email"
        label="Логин"
        append-icon="account_circle"
        v-model="email"
        :rules="emailRules"
      ></v-text-field>
      <v-text-field
        dense
        outlined
        type="password"
        label="Пароль"
        :rules="passwordRules"
        append-icon="https"
        v-model="password"
      ></v-text-field>
      <div align="center" justify="center">
        <v-btn
          class="mx-2 primary"
          rounded
          @click="logIn"
          :loading="loading"
          :disabled="!valid || loading"
        >
          Авторизоваться
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    email: "",
    password: "",
    emailRules: [
      v => !!v || "Почта обязательна для заполнения",
      v => /.+@.+/.test(v) || "Почта должна быть корректной"
    ],
    passwordRules: [
      v => !!v || "Пароль обязателен для заполнения",
      v => (v && v.length >= 6) || "Пароль должен быть более 6 символов"
    ]
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    logIn() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("loginUser", user)
          .then(() => {
            this.$router.push("/leaders");
          })
          .catch(() => {});
      }
    }
  }
}
</script>
