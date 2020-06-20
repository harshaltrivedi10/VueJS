<template>
  <div class="col-sm-12 col-md-12 col-lg-12">
    <div class="card border-info mb-3">
      <div class="card-header">
        <h4 class="card-title">
          {{ stock.name }}
          <small
            >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            placeholder="Quantity"
            class="form-control"
            v-model="quantity"
            :class="insufficientQuantity ? 'danger' : ''"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStocks"
            :disabled="quantity <= 0 || insufficientQuantity"
          >
            {{ insufficientQuantity ? "Cannot sell more" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStocks() {
      console.log(this.stock);
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      // console.log(order);
      this.sellStock(order);
      this.quantity = 0;
    },
  },
  mounted() {
    console.log("In Portfolio's stock", this.stock);
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
