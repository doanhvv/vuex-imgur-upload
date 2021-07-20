<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :key="image.id" :src="image.link" />
    </div>
    <h2 v-else>Login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  created() {
    this.fetchImages();
  },
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
