<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- @nameReset is the custom event created in the child component, and listened here to see the changes -->
        <app-user-detail
          :name="name"
          @nameReset="name = $event"
          :resetNameFn="resetNameFn"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageChange="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Harshal",
      age: 22
    };
  },
  methods: {
    changeName() {
      this.name = "Harshal Trivedi";
    },
    resetNameFn() {
      this.name = "Harshal";
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
