# vue-cli

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

```

State Management using Vuex
    => New file named store.js
    => Getters: Used to get the state to overcome the problem of duplicate calculations in multiple components. They automaticaly update themselves whenever the state changes.
    => Defined using getters key in store.js.
    => Can use mapGetters provided by Vuex to access the properties / methods in getters that you want.
    => The spread operator "..." to map the getters in AnotherResult.vue didn't work when I did this. I had to npm install babel-preset-stage-2, but now it should work properly.
    => Mutations: Change the state. They are committed from one point in the app and all other components change based on their dependency on the state.
    => Mutations always have to be synchronous. If they are asynchronous, they won't be reliable and that is not what we want when it comes to managing the state through mutations.
    => Problem at hands: No async behaviour in Mutations. Solution: Action. Action is just a function between the mutation that is trying to change the state and the component that is trigerring the mutation. Action carries out async tasks.
    => Just like mapMutations, mapActions can be used and it takes as an argument a list of all the actions that you want to use in a component.
    => Vuex and v-model: Use getters ans setters using a computed object. Example in App.vue.
    => To split code from store.js, modules can be made for a particular functionality or different files for getters, actions, mutations etc. can also be made.
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
