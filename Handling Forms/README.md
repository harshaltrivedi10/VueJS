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

-> To bind data from <input type="text / password">, simply use v-model to make a two-way binding to a data    property.

-> To bind a group of checkboxes, make an array that may store selected item(s). Place the data property (array) in the v-model for each checkbox and vue will automatically add the selected item(s) into the array.

-> To bind a group of radio buttons, simply make a data property and bind it to the radio buttons input in the v-model. Vue will then automatically assign values to the data property based on the selected radio button and will also enforce "select only one" rule on radio buttons.

-> To bind the selected dropdown make sure you have two data properties. 
    1) The list that would dynamically populate the <option>. It goes on the option tag. Bind using v-model.
    2) The data prop that contains the selected value. It goes on the <select> tag. Bind using v-model. You can also give a value to this data property, which will be taken as the default selection.

-> v-model is made up of two things:
    1) Passing a value prop from parent to child
    2) On Change of the "value" prop, emit a "input" event with the new "value".

-> Custom form elements can be made and the logic of v-model can be used to bind values and change them dynamically with changes in the custom form element.


Note:
    Modifiers can be used with tag attributed provided by Vue, for example: .lazy, .number and they can also be chained to manipulate how data is bound to a tag.
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
