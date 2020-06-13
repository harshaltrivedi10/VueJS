# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

```

=> Using <transition>
    => Can have mutiple elements between these tags, but it only allows displaying one element at a time. Cannot display a list.
    => Using Transition CSS classes.

=> Animations can be applied with @keyframes and then the animation CSS classes.
    => Here I used name="slide" for sliding transitions.
    => There can be scenarios where we mix transitions with animations, there make sure you give type attribute to the transition class to ensure that the transition length is dictated by either the animation or the transition.

=> To make sure that the animations take place the first time the page is accessed or when a refresh takes place, add "appear" attribute to the transition tag of the block that you want to behave like that.

=> When passing static values, attributes to HTML tags can be set normally, but when dynamicaly we want them to be set, add ':' in front of them and for the value pass the data property that is being set dynamically.  Refer to transition tag #1 in App.vue to see the example.

=> To enable smooth transitions between two elements: for example on a button click, we transition from one div to another div, use "key" to uniquely identify the div's and use mode (out-in or in-out) on the transition tag to enforce a mode of transition.

=> Transition JS Hooks: Can be used to use JS to enable animations and transitions.
    => If JS i used to enable animations and transitions, add ":css = false" to notify the transition tag that we are not explicitly defining any css here and just skip looking for any classes.

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
