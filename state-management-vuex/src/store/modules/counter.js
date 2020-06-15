const state = {
  counter: 0,
};

const getters = {
  doubleCounter: (state) => {
    return state.counter * 2;
  },
  stringCounter: (state) => {
    return state.counter + " Clicks";
  },
};

const mutations = {
  increment: (state) => {
    state.counter++;
  },
  // increment: (state, payload) => {
  //   state.counter += payload;
  // },
  decrement: (state) => {
    state.counter--;
  },
};

const actions = {
  increment: ({ commit }) => {
    commit("increment");
  },
  // payload can be passed as an argument
  // increment: ({ commit }, payload) => {
  //   commit("increment", payload);
  // },
  decrement: ({ commit }) => {
    commit("decrement");
  },
  asyncIncrement: ({ commit }) => {
    setTimeout(() => {
      commit("increment");
    }, 1000);
  },
  asyncDecrement: ({ commit }) => {
    setTimeout(() => {
      commit("decrement");
    }, 1000);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
