/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

*/

const app = Vue.createApp( {

    //=========== DATA PROPERTIES ===========
    data() {
        return {

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            greeting: "Hola Amigos!",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            directory: [
                {
                    email: "frank@smu.edu.sg",
                    category: "EDUCATION"
                },
                {
                    email: "kyong@smu.edu.sg",
                    category: "EDUCATION"
                },
                {
                    email: "jennie@bpink.info",
                    category: "OTHERS"
                },
                {
                    email: "layfoo@kpop.org",
                    category: "OTHERS"
                }
            ],

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            new_emails: "alice@smu.edu.sg, bob@gmail.com",       

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            party_email_subject: "Year-End KBBQ Party",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            party_email_message: "Dear friends! The year is ending, and it's party time! Please accept this invitation by 10 December 2021 yah? No need to bring anything except your wonderful hungry and thirsty self! Hope to see you and best wishes to you!",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            party_email_addresses: [
                "kyong@smu.edu.sg",
                "jennie@bpink.info"
            ]

        }
    },

    //=========== METHODS ===========
    methods: {

        add_to_directory() {
            console.log("=== [START] add_to_directory ===")

            // 1. Split email string - store in array
            let email_array = this.new_emails.split(/(?:,| )+/)
            console.log( email_array )

            // 2. Update this.directory
            for( email_item of email_array ) {
                console.log( email_item )

                if( email_item.includes("@") ) {
                    // Determine Category
                    let email_parts = email_item.split("@")
                    let email_category = "OTHERS"
                    if( email_parts[1].toUpperCase().includes("EDU") ) {
                        email_category = "EDUCATION"
                    }

                    // Insert into this.directory
                    this.directory.push(
                        {
                            email: email_item,
                            category: email_category
                        }
                    )
                }
            }

            // 3. Clear textarea
            this.new_emails = ""

            console.log("=== [END] add_to_directory ===")
        },

        // Send part invitation
        send_party_invitation() {

            let str = "Invitation sent to " + this.party_email_addresses.join(", ")

            str += `\n\nSubject: ${this.party_email_subject}`

            str += `\n\nMessage: ${this.party_email_message}`
            
            // alert( "Sent!" )

            console.log( str )
            alert( str )

        }

    }
})




// DO NOT MODIFY THIS
// ASSOCIATING the current Vue app to an HTML element with id='app'
app.mount('#app')