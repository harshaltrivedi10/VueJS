<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <p v-if="id">Server #{{ id }}</p>
      <p v-if="status">Server Status: {{ status }}</p>
      <button @click="changeStatus">Change Status</button>
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  name: "ServerDetails",
  data() {
    return {
      id: 0,
      status: ""
    };
  },
  created() {
    eventBus.$on("passData", (id, status) => {
      this.id = id;
      this.status = status;
    });
  },
  methods: {
    changeStatus(id) {
      this.status = "Changed";
      eventBus.statusChanged(this.id, this.status);
    }
  }
};
</script>
