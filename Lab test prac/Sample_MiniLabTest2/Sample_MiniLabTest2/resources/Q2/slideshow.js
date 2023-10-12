/*
    Name:   YOUR NAME GOES HERE (LEE Oppa)
    Email:  YOUR SMU EMAIL ID GOES HERE (lee.oppa.2020)
*/


/* DO NOT CHANGE THIS FUNCTION's NAME */
function display_default() {

    console.log("===[START] display_default() ===")


    // Part A
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH


    const url = "http://localhost/MLT/Q2/api/info.php";
    axios.get(url).then(response => {
        console.log(response.data);
        var military_statistics = response.data.military_statistics;
        htmlstr = "";
        var active = " active";
        var firstCountryPassed = false;
        console.log(military_statistics);

        for(country in military_statistics){
            console.log(country);
            
            var countryDetails = military_statistics[country];
            var countryFlag = countryDetails["flag_relative_url"];
            var countryPres = countryDetails["head_of_state"];

            htmlstr += `
           <div class="carousel-item${active}" data-bs-interval="3000">
                <img src="${countryFlag}" class="d-block w-100">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${country}</h5>
                    <p>${countryPres}</p>
                </div>
            </div>
           `; 

           if(!firstCountryPassed){
             firstCountryPassed = true;
             active="";
           }
        }

        // for(country in military_statistics){
        //    console.log(country)

        //    var countryDetails = military_statistics[country];

        //    if(!firstCountryPassed){
        //      firstCountryPassed = true;
        //      active = "";
        //    }

        //    console.log(countryDetails["flag_relative_url"]);
        //    htmlstr += `
        //    <div class="carousel-item${active}">
        //         <img src="${countryDetails["flag_relative_url"]}" class="d-block w-100">
        //         <div class="carousel-caption d-none d-md-block">
        //             <h5>${countryDetails}</h5>
        //             <p>${countryDetails["head_of_state"]}</p>
        //         </div>
        //     </div>
        //    `; 
        // }
         console.log(htmlstr);
         document.getElementById("imageCarousel").innerHTML = htmlstr;
    }).catch(error => {
        console.log(error.message);
        
    });


    console.log("===[END] display_default() ===")

}
