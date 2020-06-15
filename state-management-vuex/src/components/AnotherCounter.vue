<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <!-- if we want to send multiple arguments, that's not possible normally like increment(10, 1000), so this is what can be done -->
    <!-- <button class="btn btn-primary" @click="increment({by: 100, duration: 2000})">Increment</button> -->
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"]),
    // this is what mapAction gives, the argument "by" is a payload sp we can say increment(100) in @click and this will increment by 100. Two more changes, in action and in mutation can be seen in store.js
    // increment(by) {
    //     this.$store.dispatch('increment', by)
    // }
  },
};
</script>
