// Every property defined in the object in the Vue instance will be watched (will have designated getters and setters)

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs.heading);
    },
    updateTitle(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// To mount the template (html code) controlled by Vue other than by using el property, can be done using $mount as follows. Can be used when you don't know beforehand where you should mount your Vuejs instance to.
// vm1.$mount("#app1")

// here the new Property will be added, but it won't be watched be Vue framework
vm1.newProperty = 'New Property';
console.log(vm1);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance'
  },
  methods: {
    changeTitle() {
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>In Three</h1>'
});

vm3.$mount('#app3');
