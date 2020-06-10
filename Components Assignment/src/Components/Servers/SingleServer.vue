<template>
  <div>
    <li
      class="list-group-item"
      :key="index"
      @click="sendData"
    >Server #{{ index }} || Server Status: {{ status }}</li>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  name: "SingleServer",
  props: {
    index: { type: Number, required: true },
    status: { type: String, required: true }
  },
  methods: {
    sendData() {
      eventBus.passData(this.index, this.status);
    }
  },
  created() {
    eventBus.$on("statusChanged", (id, status) => {
      console.log(id);
      if (this.index === id) {
        this.status = status;
      }
    });
  }
};
</script>