import Vue from 'vue'
import App from './App.vue'

Vue.config.silent = true

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageChanged", age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})