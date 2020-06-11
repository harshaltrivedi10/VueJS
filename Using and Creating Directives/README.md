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

Keep in mind: there are 5 life-cycle hooks pertaining to directives. So, if you want to create your own directive, you need to know about these.

1) bind(element, binding, vnode): Once the directive is attached. Binding and vnode are read-only.[Most Important]
2) inserted(element, binding, vnode): Inserted into the Parent node.
3) update(element, binding, vnode, oldVnode): Once Component is updated (just the parent and not yet the children).
4) componentUpdated(element, binding, vnode, oldVnode): Once component is updated (with the children).
5) unbind(element, binding, vnode): Once directive is removed

Global directive: Define in main.js
    => new directive: Vue.directive("part after v-", {})
    => to get an argument, passed to the directive as v-dir:argument, use binding.arg
    => to get an modifier, passed to the directive as v-dir.modifier, use binding.modifiers["modifier"]

Local directive:
    Inside a Vue file, using directives object:
    'directive-name': {behaviour}. Behaviour is same as the global one has. Gets the same life cycle methods too. 
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
