
//can register a component for reuse
Vue.component("hello", {
  template: "<h1>Hello</h1>"
})

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      //can access the ref using $
      console.log(this.$refs.myButton)
      //can change the value of button text using ref
      this.$refs.myButton.innerText = "Test"

    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

//use mount method in vue to amount the div
// vm1.$mount("#app1")
//can access ref from outside the instance
console.log(vm1.$refs.heading)
vm1.$refs.heading.innerText = "Ref heading"
console.log(vm1)
//access vue instance from outside
setTimeout(function () {
  vm1.title = "Changed by timer"
  vm1.show()
}, 2000)

console.log(vm1.title)
//another way of accessing data obj in vm1
console.log(vm1._data.title)

//setting up another instance 
var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS Instance',
  },
  methods: {
    //can access vm1 property
    show: function () {
      vm1.title = "Change from vm2"
    },

  },
});

var vm3 = new Vue({
  el: "Hello",
  template: "<h1>Hello</h1>"

})

// vm3.$mount("#app3")

