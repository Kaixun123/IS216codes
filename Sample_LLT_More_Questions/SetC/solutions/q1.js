// Vue instance

let main = Vue.createApp({

    data() {
        return {

            // DO NOT MODIFY/EDIT THIS DATA PROPERTY
            available_celebs: {
                "G-Dragon": "bb_gd.jpg",
                "Taeyang": "bb_taeyang.jpg",
                "TOP": "bb_top.jpg"
            },

            // DO NOT MODIFY/EDIT THIS DATA PROPERTY
            available_activities: [
                {
                    "name": "Chat",
                    "price": "10.50"
                },
                {
                    "name": "Hug",
                    "price": "30.25"
                },
                {
                    "name": "Kiss",
                    "price": "60.99"
                }
            ],

            // DO NOT MODIFY THIS MANUALLY IN THIS FILE
            selected_celeb: null,

            // DO NOT MODIFY THIS MANUALLY IN THIS FILE
            selected_activities: []

        }
    },

    computed: {

        total_bill() {
            let str = ``

            if( this.selected_celeb == null || this.selected_activities.length === 0 ) {
                return null
            }

            // All-iz-well, proceed to the next step!
            str += `
                <table border='1'>
                    <tr>
                        <th colspan='2'>
                            Your Fan Request
                        </th>
                    </tr>

                    <tr>
                        <td>
                        <img src="${this.available_celebs[this.selected_celeb]}">
                        </td>
                        <td>
                            ${this.selected_celeb}
                        </td>
                    </tr>
            `

            let total = 0

            for( activity_object of this.selected_activities ) {

                let name = activity_object.name
                let price = Number(activity_object.price)

                total += price

                str += `
                <tr>
                    <td> ${name} </td>
                    <td> $${price.toFixed(2)} </td>
                </tr>
                `
            }

            str += `
                <tr>
                    <td> Total </td>
                    <td> $${total.toFixed(2)} </td>
                </tr>
            `


            str += `
                </table>
            `

            return str
        }

    }

})

main.mount("#main")