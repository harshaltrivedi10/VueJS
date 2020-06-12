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

=> You can register it globally using Vue.filter(filtername, ) in main.js or locally in .vue file using filters block.

=> There are no built in filters provided by Vue.

=> Tranforms data / what the user sees. This transformation is not done to the data before outputting it, it is just done in the template.

=> Used by first taking the text which is to be filtered / transformed and adding a pipe "|", followed by the filter name. We can also chain multiple filters. In that scenario, the output filtered by the last filer will be displayed.

BETTER ALTERNATIVE TO A FILTER: COMPUTED PROPERTY

Mixins: Share data / properties between multiple components

=> Data property can be in a mixin and a component that ues the mixin, in such a scenario, data, methos and other propertirs of the component aren't destroyed, rather they are appended to hose already present in the component.

=> If there are overlapping life-cycle hooks in the mixin and the component, the life-cycle hook in the mixin is given precedence over the life-cycle hook in the component.

=> Global Mixins (Used in special cases) is added to every component.It is directly added to all the files. Created in main.js using Vue.mixin()

=> The data in Mixins, when reused in components isn't shared. This means, every component, when using this data from a mixin, receives a new copy of that data property.
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
