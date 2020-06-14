<template>
  <div>
    <h3>Some User Details</h3>
    <p>The user id is: {{ id }}</p>
    <router-link tag="button" :to="link" class="btn btn-default">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  props: {
    id: {
      type: String
    }
  },
  beforeRouteEnter(to, from, next) {
    // In this Life cycle hook, you cannot access any properties because this is executed before you enter the route and only if next() executes preperly, then you can enter this component
    // If the user is authenticated
    if (true) {
      next();
    } else {
      next(false);
    }

    // You can use next(vm => {return vm.property}). If a callback function in executed, that means next() has been passed and so the component has been loaded. Now you can access properties of this component here.
  }
};
</script>
