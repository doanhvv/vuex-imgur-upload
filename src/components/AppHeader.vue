<template>
  <div>
    <div class="ui menu">
      <div class="header item">Image Storage</div>
      <div class="menu">
        <router-link to="/" class="item">Home</router-link>
      </div>
      <div class="right menu" v-if="isLoggedIn">
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <div class="right menu" v-else>
        <a class="item" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  data() {
    return {
      isActive: true,
    };
  },
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"]),
};
</script>

<style scoped>
.item.router-link-exact-active.router-link-active {
  font-weight: bold;
  background: #eee;
}
</style>
