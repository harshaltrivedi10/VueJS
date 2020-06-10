<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <single-server
          v-for="server in servers"
          :key="server.id"
          :index="server.id"
          :status="server.status"
        ></single-server>
      </ul>
    </div>
  </div>
</template>

<script>
import SingleServer from "./SingleServer.vue";
import { eventBus } from "../../main";
export default {
  name: "Servers",
  components: {
    SingleServer
  },
  //   array of server objects and pass id
  data() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
  }
};
</script>
