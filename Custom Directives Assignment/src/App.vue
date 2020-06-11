<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button class="btn btn-primary" v-myOn:click="clickMe">Click Me!</button>
        <hr />
        <div
          style="width: 100px; height: 100px; background-color: blue;"
          v-myOn:mouseenter="mouseEnter"
          v-myOn:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myOn: {
      bind(el, binding) {
        let type = binding.arg;
        let fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clickMe() {
      alert("I was clicked!");
    },
    mouseEnter() {
      console.log("Mouse Entered");
    },
    mouseLeave() {
      console.log("Mouse Left");
    }
  }
};
</script>

<style>
</style>
