<template>
  <div class="container">
    <form v-if="!onClick">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <full-name v-model="fullName"></full-name>
          </div>
          <div class="form-group">
            <label for="emailAddress">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailAddress"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
              <label for="yes">
                <input type="radio" class="form-check-input" id="yes" value="Yes" v-model="store" /> Yes: Store in DB
              </label>
              <label for="no">
                <input type="radio" class="form-check-input" id="no" value="No" v-model="store" /> No: Don't store in DB
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Submit</button>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ store }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./components/FullName.vue";
export default {
  components: { FullName },
  data() {
    return {
      fullName: "Harshal Trivedi",
      email: "",
      password: "",
      store: "Yes",
      onClick: false
    };
  },
  methods: {
    onSubmit() {
      this.onClick = !this.onClick;
    }
  }
};
</script>

<style>
</style>
