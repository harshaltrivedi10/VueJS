import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    passData(id, status) {
      this.$emit("passData", id, status)
    },
    statusChanged(id, status) {
      this.$emit("statusChanged", id, status)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
