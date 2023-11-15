const app = Vue.createApp( { 
    data() {
        return {
            // your properties here

            
            /* you need not use this buttonDetails 
            buttonDetails: [
                {
                    fnToCall: "attack",
                    btnType: "btn btn-danger",
                    spacing: "mx-2",
                    label: "ATTACK"
                },
                {
                    fnToCall: "specialAttack",
                    btnType: "btn btn-warning",
                    spacing: "mx-2",
                    label: "SPECIAL ATTACK"
                },
                {
                    fnToCall: "heal",
                    btnType: "btn btn-success",
                    spacing: "mx-2",
                    label: "HEAL"
                },
                {
                    fnToCall: "giveUp",
                    btnType: "btn btn-info",
                    spacing: "mx-2",
                    label: "GIVE UP"
                }
            ] */
        }
    },

    methods: {
        // start
        start() {
            console.log("start")
        },

        // attack!! event handler for Attack button
        attack() {
            console.log("attack")
        },

        // special attack. event handler for Special Attack button
        specialAttack() {
            console.log("special attack")
        },

        // heal. event handler for Heal button
        heal() {
            console.log("heal")
        },

        // give up. event handler for Give up button
        giveUp() {
            console.log("give up")
        }
    }
});
const vm = app.mount("#app");
