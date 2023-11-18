/*
    
Name:   
Email:  

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
            
            // YOUR CODE GOES HERE
            new_emails_list = this.new_emails.replace(/[;]/g, "").split(/\s+/);
            console.log(new_emails_list);

            for( email_item of new_emails_list ) {
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

            this.new_emails = ""
        },
        // Send part invitation
        send_party_invitation() {

            // YOUR CODE GOES HERE
            let messageStr = "Invitation sent to " + this.party_email_addresses.join(',');

            messageStr += '\n\nSubject:' + this.party_email_subject

            messageStr += `\n\nmessage: ${ this.party_email_message }`

            alert(messageStr);
        }

    }
})


// DO NOT MODIFY THIS
// ASSOCIATING the current Vue app to an HTML element with id='app'
app.mount('#app')