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
# Slots

Used to reserve slots and can be reserved for content being passed from outside.
-> Styling can be applied fro  either the child or the parent component.
-> The VueJS syntax is handled on the parent component, i.e., where the content of slot goes.
    -> Looks a bit similar to children props 

-> Named Slots can also be used to enable the usage of multiple slots
    -> Give name attribute in child and slot attribute in parent.
    -> The slot without name attribute would be considered as a default slot and it will take the element(s) whose slot attribute is not set.

# Dynamic Components
-> By default if you dynamically load different components and if you jump from 1st component to second, the latter one is destroyed. You can override this behavior using <keep-alive> tag to make sure the dynamically loaded components aren't destroyed.

Two new life-cycle hook methods namely "activated" and "deactivated" can be used. "activated" can be used when the component is accessed and "deactivated" can be used when we move away to another component from the current component. 

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
