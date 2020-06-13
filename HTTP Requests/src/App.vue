<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http Requests</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.userName" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <hr />
        <input type="text" v-model="path" />
        <hr />
        <button class="btn btn-primary" @click="storeInDB">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchAll">Fetch All Data</button>
        <hr />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(user, index) in users"
            :key="index"
          >{{ user.userName }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HTTP from "./axios";

export default {
  data() {
    return {
      user: {
        userName: "",
        email: ""
      },
      users: [],
      resource: {},
      path: "data"
    };
  },
  methods: {
    storeInDB() {
      //   console.log(this.user);
      HTTP.post(`${this.path}.json`, this.user)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    },
    fetchAll() {
      HTTP.get(`${this.path}.json`)
        .then(response => {
          console.log(response.data);
          const resultArray = [];
          for (let key in response.data) {
            resultArray.push(response.data[key]);
          }
          this.users = resultArray;
        })
        // .then(data => {
        //   console.log(data);
        // })
        .catch(error => console.log(error));
    }
  },
  created() {}
};
</script>

<style>
</style>
