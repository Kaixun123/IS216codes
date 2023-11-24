/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

*/

app.component("format_obj", {
    props: ["data"], // 1 mark: app.component and props

    // 2 marks: differentiate simple types, array and object
    // 1 mark: display template for the 3 categories
    // 1 mark: recursive use of component
    template: `
                <ul v-if='is_array'>
                    <li v-for='(val, idx) of data'>
                        [{{idx}}] <format_obj :data="val"></format_obj>
                    </li>
                </ul>

                <ul v-if='is_object'>
                    <li v-for='(val,key) in data'>
                        {{key}} : <format_obj :data="val"></format_obj>
                    </li>
                </ul>

                <template v-if='is_literal'>{{data}}</template>
            `,
    computed: {
        is_object() {
            return typeof this.data === "object" && !this.is_array;
        },
        is_array() {
            return Array.isArray(this.data);
        },
        is_literal() {
            return !this.is_object && !this.is_array;
        },
    },
});
