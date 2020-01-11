var one = new Vue({
    el: '#app1',
    data: {
        name: "Shuan",
        job: "Ninja",
        website: "https://vuejs.org/",
        websiteTag: "<a href='https://vuejs.org/'>Website Tag</a>"

    },
    methods: {
        greet: function (time) {
            return "Good " + time + " " + this.name
        }


    },

    computed: {


    }
});
