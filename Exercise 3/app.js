new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function () {
            return this.value > 37 ? "Over 37" : "Less than 37"
        }
    },
    watch: {
        result: function () {
            var vm = this;
            setTimeout(function () {
                vm.value = 0
            }, 4000)
        }
    }
});