<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFn">Callback Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  //   props with type validation
  props: {
    //   can use required key as well to make sure that this prop is always passed to this component
    name: {
      type: String,
      default: "Messi"
    },
    resetNameFn: Function,
    userAge: {
      type: Number
    }

    // example of a prop that is of type: Object
    // propTwo: {
    //     type: Object,
    //     default() {
    //         name: "xyz",
    //         age: 22
    //     }
  },
  methods: {
    switchName() {
      // can use props here by using this.propName
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Harshal";
      this.$emit("nameReset", this.name);
    }
  },
  created() {
    console.log("In created()");
    // life-cycle hook
    eventBus.$on("ageChanged", age => {
      console.log("In here");
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
