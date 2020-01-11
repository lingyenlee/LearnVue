var one = new Vue({
    el: '#app1',
    data: {
        age: 25,
        x: 0,
        y: 0

    },
    methods: {
        add: function (inc) {
            this.age += inc
        },
        substract: function (dec) {
            this.age -= dec
        },
        //pass the event as argument
        updateXY: function (event) {
            this.x = event.offsetX,
                this.y = event.offsetY

        },
        click: function () {
            return alert("you click me")
        }

    },

    computed: {


    }
});
