import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  // savedPosition is something like, when you have scrolled down on a page and you hit back and then
  // you're again on the same page, you are redirected to the scrolled position.
  scrollBehavior(to, from, savedPosition) {
    // static position on the page
    // return { x: 0, y: 700 };

    // use a selector
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    // on top of the page if to.hash or savedPosition don't exist
    return { x: 0, y: 0 };
  },
});

// executes before each routing action
router.beforeEach((to, from, next) => {
  console.log("Global beforeEach");
  next();

  // next(false); // stop them from going
  // next({routing object}) sane with path, or with named routes, with params and so on.
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
