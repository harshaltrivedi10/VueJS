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

## Router:

```

  => Register using Vue.use()
  => Place router-view to keep a placeholder for dynamically loading routes
  => Use "router-link and to" instead of "a and href"
  => For routes like "/user/:id", ":id" can now be passed as a prop to the destination component if in routes file you add one more key value pair "props: true"
  => Use tag="li" to make sure the links look like list elements.
  => Use active-class="active" to highlight active class.
  => Use exact keyword to exactly match a path.
  => this.$router and this.$route are added to all the Vue files.
  => Use children: [] to register children of a path. If you use "/" to start each link, they'll be added to main domain. If you dont add "/" and directly start the params/path, the path will be appended to its parent. For example, see the User route in routes.js.
  => To view child routes, add <view-router> in the parent of "these children's" component.
  => Routes can have names. Can do that by adding name key while defining route in routes.js file.
  => When defining routes, if name key is added, you can use "name" instead of the path itself to route to the page.
  => In a url, the part after the ? is a query. Query parameters can be passed like a key and bject pait where inside a object each query param is passed as a key value pair. Refer to: UserDetail.vue.
  => Named "router views" allows a developer to add name attribute and then specify the name of that router view  (refer to App.vue). You can see the example in routes.js. There to each path (User and Home), I have given new components key. In there, there is a default key, that points to the default page at that path, and the second key is the "named-router-view" whose value is the Component you want to take that router's place.
  => In routes.js. See the example of redirect me to see how you can redirect. Ctach all non-exiting routes and reidrect to home page is also shown as the last route in routes.js. Can be referred to as "generic / catch-all" route.
  => Transitions cna be added to any routes. Example is given in App.js, though the animation is very bad but you can get an idea about how it works.
  => In UserDetail and UserEdit, you can see the hash parameter somewhere. It is used to navigate to a particular part on a long page and used to handle the scrolling behaviour on a page. Can add scrollBehaviour methods in main.js, where router is defined to set some scrolling behaviour.
  => Router Guards are used in main.js (universal). In routes.js and UserDetail.js for individual components. Can be used to execute logic before the route is loaded and before the route is left.
  => Lazy loading of routes, resolving routes and grouping routes to create one single bundle for multiple routes is shown in routes.js.
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
