<template>
  <div class="container">
    <div class="row">
      <header-vue></header-vue>
    </div>
    <hr />
    <div class="row">
      <body-vue />
    </div>
    <hr />
    <div class="row">
      <footer-vue></footer-vue>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./Components/Shared/Header.vue";
import BodyVue from "./Components/Servers/Body.vue";
import FooterVue from "./Components/Shared/Footer.vue";

export default {
  components: {
    HeaderVue,
    BodyVue,
    FooterVue
  }
};
</script>

<style>
</style>
