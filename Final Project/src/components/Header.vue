<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light nav-fill">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          class="nav-item"
          tag="li"
          to="/portfolio"
          activeClass="active"
        >
          <a class="nav-link">
            Portfolio
          </a>
        </router-link>

        <router-link
          class="nav-item"
          tag="li"
          to="/stocks"
          activeClass="active"
        >
          <a class="nav-link">
            Stocks
          </a>
        </router-link>
      </ul>
      <ul class="navbar-nav navbar-right">
        <li class="nav-item" style="cursor: pointer;">
          <a @click="endDay" class="nav-link">End Day</a>
        </li>

        <li class="dropdown" @click="isDropdownOpen = !isDropdownOpen">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div
            class="dropdown-menu"
            :class="isDropdownOpen ? 'show' : ''"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" @click="saveData" href="#">Save Data</a>
            <a class="dropdown-item" @click="loadData" href="#">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right"
        >Funds Available: {{ funds | currency }}</strong
      >
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import HTTP from "../axios";
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      HTTP.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>
