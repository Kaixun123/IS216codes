/*
    
Name:   
Email:  

*/

app.component('format_obj', {
    props: ['data'],
    template: 
    `
            <ul v-if="data.constructor.name =='Object'">
                 <li v-for='(val, idx) of data'>
                    {{idx}} : <format_obj :data="val"></format_obj>
                </li>
            </ul>


            <ul v-else-if="data.constructor.name == 'Array'">
                <li v-for='(val, idx) of data'>
                    [{{idx}}] <format_obj :data="val"></format_obj>
                </li>
            </ul>

            <template v-else>{{data}}</template>

    `
})


// YOUR CODE GOES HERE
