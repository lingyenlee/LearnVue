var one = new Vue({
    el: '#app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    // methods: {
    //  if using method, both runs
    //     addtoA: function () {
    //         console.log("addtoA")
    //         return this.age + this.a
    //     },

    //     addtoB: function () {
    //         console.log("addtoB")
    //         return this.age + this.b
    //     }
    // },
    computed: {

        // if using computed properties, only the one click will run 
        addtoA: function () {
            console.log("addtoA")
            return this.age + this.a
        },

        addtoB: function () {
            console.log("addtoB")
            return this.age + this.b
        }
    }

});
