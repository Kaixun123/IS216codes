/*
    
Name:   
Email:  

*/

app.component('format_obj', {
    props: ['data'],
    template: `
                    <span v-if="typeof data !== 'object'">
                        {{data}}
                    </span>
                    <div v-else-if="Array.isArray(data)">
                        <ul v-for="(val, index) in data">
                            <li>[{{index}}] <format_obj :data="val"></format_obj></li>
                        </ul>
                    </div>
                    <div v-else>
                        <ul v-for="(val, index) in data">
                            <li>{{index}} : <format_obj :data="val"></format_obj></li>
                        </ul>
                    </div>

               `
})

// YOUR CODE GOES HERE
