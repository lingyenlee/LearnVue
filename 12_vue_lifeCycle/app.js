var vm1 = new Vue({
  el: '#app',
  data: {
    title: "The VueJS Instance"
  },
  beforeCreate: function () {
    console.log("before created()")
  },

  created: function () {
    console.log("created()")
  },

  beforeMount: function () {
    console.log("before mount()")
  },

  mounted: function () {
    console.log("mounted()")
  },


  beforeUpdate: function () {
    console.log("before update()")
  },

  updated: function () {
    console.log("updated()")
  },

  beforeDestroy: function () {
    console.log("before destroy()")
  },

  destroyed: function () {
    console.log("destroyed()")
  },
  methods: {
    destroy: function () {
      this.$destroy()
    }

  }

});
