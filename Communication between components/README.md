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
Communication between parent and child can take place in two ways:
    1) Using Props from Parent -> Child
       Using Custom event through $emit and updating data in parent
    2) Using Props from Parent -> Child
       Making a Callback function in Parent and passing it as a prop in Child and executing / calling it in the child

Communication between two siblings takes place using event-bus. This will enable passing data between siblings without bringing parent component in the middle 


```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
