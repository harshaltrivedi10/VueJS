<template>
  <div class="col-sm-12 col-md-12 col-lg-12">
    <div class="card border-success mb-3">
      <div class="card-header">
        <h4 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            placeholder="Quantity"
            class="form-control"
            v-model="quantity"
            :class="insufficientFunds ? 'danger' : ''"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0 || insufficientFunds"
          >
            {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    stock: {
      type: Object,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        // goes into a portfolio
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity),
      };
      // console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
  computed: {
    ...mapGetters(["funds"]),
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
