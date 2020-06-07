<template>
  <div align="center" justify="center">
    <v-avatar size="48px">
      <v-img src="@/assets/vk.svg" alt="VK"></v-img>
    </v-avatar>
    <v-avatar size="48px">
      <v-img src="@/assets/ok.svg" alt="VK"></v-img>
    </v-avatar>
    <v-avatar size="48px">
      <v-img src="@/assets/fb.svg" alt="VK"></v-img>
    </v-avatar>
    <v-avatar size="48px">
      <v-img src="@/assets/gosuslugi.svg" alt="VK"></v-img>
    </v-avatar>
    <v-avatar size="48px">
      <v-img src="@/assets/google.svg" alt="VK"></v-img>
    </v-avatar>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "@/assets/vk.svg",
      "@/assets/ok.svg",
      "@/assets/fb.svg",
      "@/assets/gosuslugi.svg",
      "@/assets/google.svg"
    ]
  }),
  computed: {
    imageLink() {
      let newArr = [];
      for (let i = 0; i < this.icons.length; i++) {
        let str = "@/assets/" + this.icons[i];
        newArr.push(str);
      }
      return newArr;
    }
  }
};
</script>
