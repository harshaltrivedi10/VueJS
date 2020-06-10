<template>
  <div class="container">
    <quote-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></quote-header>
    <new-quote @newQuoteAdded="addNewQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import QuoteHeader from "./components/Header.vue";
export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ["First Quote"]
    };
  },
  components: {
    QuoteGrid,
    NewQuote,
    QuoteHeader
  },
  methods: {
    addNewQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete some quotes!!!");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
