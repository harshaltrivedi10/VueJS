<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
        <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
        <hr />
        <!-- <app-blue>Dynamically Passed</app-blue>
        <app-green>Dynamically Passed</app-green>
        <app-red>Dynamically Passed</app-red>-->
        <!-- <keep-alive> -->
        <component :is="selectedComponent">Dynamically Passed</component>
        <!-- </keep-alive> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      selectedComponent: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
