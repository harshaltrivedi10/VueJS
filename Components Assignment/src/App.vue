<template>
  <div class="container">
    <header-vue></header-vue>

    <hr />
    <div class="row">
      <servers-vue />
      <server-details-vue />
    </div>
    <hr />
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import HeaderVue from "./Components/Shared/Header.vue";
import ServersVue from "./Components/Servers/Servers.vue";
import ServerDetailsVue from "./Components/Servers/ServerDetails.vue";
import FooterVue from "./Components/Shared/Footer.vue";

export default {
  components: {
    HeaderVue,
    ServersVue,
    ServerDetailsVue,
    FooterVue
  }
};
</script>

<style>
</style>
