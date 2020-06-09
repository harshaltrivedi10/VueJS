# vue-cli-example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Environment Variables
```
.env can be set to set environment variables
-> Variable names should always look like "VUE_APP_{VariableName}"
-> .env.development, .env.test and .env.production can also be made to set environment variables for different builds.
```

### Adding Plugins
```
Once the project is set and you want to add new plugins. ou can do that by running npm install. You don't have to add the plugins when you create the app.
```

### Global vue-cli-service
```
you can run (sudo) npm i -g vue-cli-global to run vue commands globally. This can be used to enable instant prototyping. You can make a .vue file anywhere then and run "vue serve filename.vue" to add it into the current workflow just for testing purpose.
```

### Build Targets
```
-> Vue App (command: vue build (default). Normal Vue App Bundle. Includes your code + Vue Framework.)
-> Vue Library (command: vue build --target lib. A distributable Vue Library Bundle. Only includes your code.)
-> Web Component (command: vue build --target wc. A distributable Web Component. Only includes your code. Can be dumped into any page where you import Vue.)
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
