new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isRunning: false,
        logs: [],
    },

    methods: {
        startGame: function () {
            this.isRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100
            this.logs = []
        },

        attack: function () {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage

            //add logs
            this.logs.unshift({
                isPlayer: true,
                text: "Player hits monster for " + damage
            })

            if (this.checkWin()) {
                return
            }
            this.monsterAttacks();
            this.checkWin();
        },

        monsterAttacks: function () {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage
            this.logs.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            })
        },

        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New Game?")) {
                    this.startGame()

                } else {
                    this.isRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game?")) {
                    this.startGame()

                } else {
                    this.isRunning = false;
                }
                return true;
            }
            return false;
        },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },

        specialAttack: function () {
            var damage = this.calculateDamage(10, 20)
            this.monsterHealth -= damage
            this.logs.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            })
            if (this.checkWin()) {
                return
            }
            this.monsterAttacks()
            this.checkWin()
        },

        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {
                this.playerHealth = 100
            }
            //still attack by monster
            this.monsterAttacks()
            var damage = this.calculateDamage(3, 10)
            this.logs.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            })
            this.checkWin()
        },

        giveUp: function () {
            this.isRunning = false
        },
    },
});