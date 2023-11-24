// Part A
function get_level() {

    let path = document.getElementById('path').value
    console.log(path)

    let level = 0
    for(cur of path) {
        console.log(cur)

        if(cur == 'D')
            level--
        else if(cur == 'U')
            level++
    }

    console.log(level)
    return level
    
}


// Part B
function count_valleys() {

    let path = document.getElementById('path').value
    console.log(path)

    let level = 0
    let num_valleys = 0
    
    for(cur of path) {

        if( cur == 'U' ) {
            level++

            if( level == 0 ) {
                num_valleys++
            }
        }
        else if( cur == 'D' ) {
            level--
        }
        
    }

    console.log(num_valleys)
    return num_valleys

}


// Part C
function count_mountains() {
    
    let path = document.getElementById('path').value
    console.log(path)

    let level = 0
    let num_mountains = 0
    
    for(cur of path) {

        if( cur == 'U' ) {
            level++
        }
        else if( cur == 'D' ) {
            level--

            if( level == 0 ) {
                num_mountains++
            }
        }
        
    }

    console.log(num_mountains)
    return num_mountains

}


// Part D
function process_count_valleys() {

    let level = get_level()
    
    if( level === 0 ){
        // Valid
        document.getElementById('num_valleys').innerText = 
            "Number of Valleys: " + count_valleys()
    }
    else {
        let msg = ""

        if( level < 0 ) {
            // Invalid - valley
            msg = "Invalid path! Hiker still in valley!"
        }
        else if( level > 0 ) {
            // Invalid - mountain
            msg = "Invalid path! Hiker still on mountain!"
        }

        document.getElementById('msg').innerText = msg
    }
    
}


// Part D
function process_count_mountains() {
    let level = get_level()
    
    if( level === 0 ){
        // Valid
        document.getElementById('num_valleys').innerText = 
            "Number of Mountains: " + count_mountains()
    }
    else {
        let msg = ""

        if( level < 0 ) {
            // Invalid - valley
            msg = "Invalid path! Hiker still in valley!"
        }
        else if( level > 0 ) {
            // Invalid - mountain
            msg = "Invalid path! Hiker still on mountain!"
        }

        document.getElementById('msg').innerText = msg
    }
    
}


// Part E
function print_path() {

    let path = document.getElementById('path').value
    console.log(path)

    let len = path.length
    let level = 0
    let column = 0

    let path_array = []
    let max_depth = 0
    let max_height = 0


    // Prepare initial array
    for(i = 0; i < len; i++) {
        // console.log( path[i] )

        if( path[i] == 'U' ) {
            level++
        }
        else if( path[i] == 'D' ) {
            level--
        }

        path_array.push(  [ path[i], level, column ]  )
        column++

        if( level < max_depth ) {
            max_depth = level
        }
        if( level > max_height ) {
            max_height = level
        }
    }


    // console.log("Max Height: " + max_height)
    // console.log("Max Depth: " + max_depth)



    // Adjust row index & make a new object
    let row_normalize = Math.abs(max_height) + Math.abs(max_depth)
    let new_path_array = []
    let max_row = 0

    for(item of path_array) {

        let row_index = Math.abs( item[1] - Math.abs(max_height))
        let column_index = item[2]

        let key = row_index + ":" + column_index  // row:col
        let value = item[0]

        if( row_index > max_row ) {
            max_row = row_index
        }

        new_path_array[key] = value
    }

    // console.log( new_path_array )


    
    // Prepare print array
    let print_array = []
    for(row = 0; row <= max_row; row++) {
        let temp = []

        for(col = 0; col <= len; col++) {
            let key = row + ":" + col

            if( key in new_path_array ) {
                temp.push( new_path_array[key] )
            }
            else {
                temp.push(" ")
            }
        }

        print_array.push( temp )
    }

    // console.log( print_array )



    // Prepare final string
    let final_str = ''
    for( row of print_array ) {
        for( item of row ) {
            //console.log( item )
            final_str += item
        }
        final_str += "\n"
    }

    console.log(final_str)

    // DOM
    document.getElementById("hiking_path").innerText = final_str

}