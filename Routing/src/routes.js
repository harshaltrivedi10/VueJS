import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

// lazy loading using webpack
const User = (resolve) => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user-bundle"
  );
};

const UserStart = (resolve) => {
  require.ensure(
    ["./components/user/UserStart.vue"],
    () => {
      resolve(require("./components/user/UserStart.vue"));
    },
    "user-bundle"
  );
};

const UserDetail = (resolve) => {
  require.ensure(
    ["./components/user/UserDetail.vue"],
    () => {
      resolve(require("./components/user/UserDetail.vue"));
    },
    "user-bundle"
  );
};

const UserEdit = (resolve) => {
  require.ensure(
    ["./components/user/UserEdit.vue"],
    () => {
      resolve(require("./components/user/UserEdit.vue"));
    },
    "user-bundle"
  );
};

export const routes = [
  {
    path: "/",
    components: { default: Home, headerTop: Header },
    name: "Home",
  },
  {
    path: "/user",
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        props: true,
        beforeEnter: (to, from, next) => {
          console.log("Before User Detail");
          next();
        },
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
    components: {
      default: User,
      headerBottom: Header,
    },
  },
  // { path: "redirectMe", redirect: { key value pair of named route } },
  // { path: "/redirectMe", redirect: {name: 'Home'} }, OR
  { path: "/redirectMe", redirect: "/" },
  // catch all non-existing routes
  { path: "*", redirect: "/" },
];
