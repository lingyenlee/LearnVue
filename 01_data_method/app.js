var one = new Vue({
    el: '#app1',
    data: {
        name: "Shuan",
        job: "Ninja"

    },
    methods: {
        greet: function (time) {
            return "Good " + time + " " + this.name
        }


    },

    computed: {


    }
});
