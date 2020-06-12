<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>Normal text: {{ text }}</p>
        <p>{{ text | toUpperCase | toLowerCase }}</p>
        <hr />
        <button @click="fruits.push('Strawberries')">Add Fruit</button>
        <input type="text" v-model="filterText" />
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
        <hr />
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";
export default {
  components: {
    List
  },
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello There"
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>
