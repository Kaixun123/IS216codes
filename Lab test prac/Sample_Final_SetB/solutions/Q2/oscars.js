/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

*/


// When the webpage loads
function display_default() {

    console.log("[START] display_default")
    
    // By default, display all winners (over all decades)
    call_api_get_winners_all()

    console.log("[END] display_default")

}


function call_api_get_winners_all() {

    console.log("[START] call_api_get_winners_all")


    // API endpoint
    // Relative URL
    var url = "krazyoscars/winner/read.php"

    axios.get(url)
    .then(response => {
        console.log( response.data )

        display_decade_list(response.data)
        display_winners(response.data)
    })
    .catch(error => {
        console.log( error.message )
    })


    console.log("[END] call_api_get_winners_all")
}


function display_decade_list(json_obj) {

    console.log("[START] display_decade_list")


    var winner_array = json_obj.records

    var str = ""

    var digit_array = []

    // Display winners as cards
    for(var winner of winner_array) {
        
        var movie_year = winner.movie.year
        var first_three_digits = movie_year.substring(0, 3) // e.g. 1994 --> 199
        digit_array.push(first_three_digits)
    }

    // Remove duplicate years
    var answer = digit_array.reduce(countDuplicates, {})

    var str = ""
    var counter = 0
    for (const [key, value] of Object.entries(answer)) {

        var new_year_str = key + "0"

        var active = ""
        if( counter == 0 ) {
            active = " active"
        }

        str += `
            <button type="button" class="dropdown-item" onClick="show_winners('${new_year_str}')">
                ${new_year_str}
                <span class="badge rounded-pill bg-warning text-dark">${value}</span>
            </button>
        `

        counter++
    }

    document.getElementById("decade_list").innerHTML = str


    console.log("[END] display_decade_list")
    
}

function countDuplicates(obj, num) {
    obj[num] = (++obj[num] || 1)
    return obj
}


function show_winners(decade) {

    console.log("[show_winners()] Start")

    // Call API
    call_api_get_winners_by_decade(decade)

    console.log("[show_winners()] End")

}


function call_api_get_winners_by_decade(decade) {

    console.log("[START] call_api_get_winners_by_decade")


    // API endpoint
    // Relative URL
    var base_url = "krazyoscars/winner/search.php"
    var final_url = base_url + "?d=" + decade

    axios.get(final_url)
    .then(response => {
        console.log( response.data )

        display_winners(response.data)
    })
    .catch(error => {
        console.log( error.message )
    })
    

    console.log("[END] call_api_get_winners_by_decade")
}


function display_winners(json_obj) {

    console.log("[START] display_winners")

    var winner_array = json_obj.records

    var str = `
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    `

    // Display winners as cards
    for(var winner of winner_array) {
        str += `
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" 
                                src="krazyoscars/images/${winner.others.image}" 
                                alt="${winner.bio.name}">
                        <div class="card-body">
                            <h5 class="card-title">${winner.bio.name}</h5>
                            <p class="card-text">
                                <span style="font-weight: bold">
                                    ${winner.movie.title} (${winner.movie.year})
                                </span>
                                <br>
                                <span style="font-style: italic">
                                    ${winner.movie.description}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
        `
    }

    // Close row
    str += `
            </div>
    `

    // Add cards to <div id="winner_cards" class="card-columns">
    document.getElementById("winner_cards").innerHTML = str

    console.log("[END] display_winners")

}