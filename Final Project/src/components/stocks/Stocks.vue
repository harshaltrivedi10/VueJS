<template>
  <div style="margin: 2%;">
    <app-stock
      v-for="stock in stocks"
      :key="stock.name"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style scoped></style>
