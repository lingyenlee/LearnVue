new Vue({
  el: '#exercise',
  data: {
    classes: {
      highlight: false,
      shrink: true
    },
    float: "float",
    font: "font",
    textColor: "text-color",
    userClass: "",
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      // var vm = this
      // setInterval(function () {
      //   vm.classes.highlight = !vm.classes.highlight,
      //     vm.classes.shrink = !vm.classes.shrink
      // }, 2000);
    },
    startProgress: function () {
      var vm = this
      var width = 0
      setInterval(function () {
        width = width + 10;
        vm.progressBar.width = width + "px "
      }, 500)

    }
  }

});
