<template>
  <div class="home">
    <YandexMap />
  </div>
</template>

<script>
import YandexMap from "@/components/YandexMap.vue";

export default {
  data: () => ({
    //
  }),
  name: "Home",
  components: {
    YandexMap
  }
};
</script>
