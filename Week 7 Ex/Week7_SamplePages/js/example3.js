// Vue instance containing data and methods
const app = Vue.createApp( {
    data() {
        return {
            name: 'John',
            phone: '123456'
        }
    },
    methods: { 
        getPhone() { 
            return "This is my number " + this.phone; 
        }
    }
})

// Link (mount) Vue instance to DOM element with id 'app'
const vm = app.mount('#app')