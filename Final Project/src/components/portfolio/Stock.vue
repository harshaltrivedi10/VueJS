<template>
  <div class="col-sm-12 col-md-12 col-lg-12">
    <div class="card border-success mb-3">
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
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStocks"
            :disabled="quantity <= 0"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  updated() {
    console.log(this.stock);
  },
  methods: {
    ...mapActions({ placeOrder: "sellStock" }),
    sellStocks: () => {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.placeOrder(order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped></style>
