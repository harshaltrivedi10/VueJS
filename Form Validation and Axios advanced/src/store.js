import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.idToken = null;
      state.userId = null;
    },
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("logout");
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post(":signUp?key=AIzaSyDZp9xW4UB85kkp9m8ctlOznMO7xAEtYc0", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((result) => {
          console.log(result);
          commit("authUser", {
            token: result.data.idToken,
            userId: result.data.localId,
          });
          const now = new Date();
          // in miliseconds
          const expirationDate = new Date(
            now.getTime() + result.data.expiresIn * 1000
          );
          localStorage.setItem("token", result.data.idToken);
          localStorage.setItem("userId", result.data.localId);
          localStorage.setItem("expiresIn", result.data.expiresIn);
          dispatch("storeUser", authData);
          dispatch("setLogoutTimer", result.data.expiresIn);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login({ commit, dispatch }, authData) {
      axios
        .post(
          ":signInWithPassword?key=AIzaSyDZp9xW4UB85kkp9m8ctlOznMO7xAEtYc0",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          // console.log(data);
          console.log(result);
          commit("authUser", {
            token: result.data.idToken,
            userId: result.data.localId,
          });
          const now = new Date();
          // in miliseconds
          const expirationDate = new Date(
            now.getTime() + result.data.expiresIn * 1000
          );
          localStorage.setItem("token", result.data.idToken);
          localStorage.setItem("userId", result.data.localId);
          localStorage.setItem("expiresIn", expirationDate);
          dispatch("setLogoutTimer", result.data.expiresIn);
        })
        .catch((error) => console.log(error));
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
        .then((result) => {
          const data = result.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          commit("storeUser", users[0]);
        })
        .catch((error) => console.log(error));
    },
    logout({ commit }) {
      commit("logout");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      router.replace("/signin");
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expiresIn");
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", { token: token, userId: userId });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
  },
});
