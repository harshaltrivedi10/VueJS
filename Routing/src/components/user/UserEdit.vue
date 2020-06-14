<template>
  <div>
    <h3>Edit the User</h3>
    <p>
      Query Params:
      <strong>Locals: {{$route.query.locale}}</strong>
      <strong>Q: {{$route.query.q}}</strong>
    </p>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return { confirmed: false };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else if (confirm("Are you sure?")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
