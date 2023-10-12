/*
    Name:   YOUR NAME GOES HERE (LEE Oppa)
    Email:  YOUR SMU EMAIL ID GOES HERE (lee.oppa.2020)
*/

/* DO NOT CHANGE THIS FUNCTION's NAME */
function display_default() {

    console.log("===[START] display_default() ===")


    // Part B
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH

    const url = "http://localhost/MLT/Q2/api/info.php";
    axios.get(url).then(response => {
        console.log(response.data);
        var military_statistics = response.data.military_statistics;
        htmlstr = "";
        console.log(military_statistics);
        

        for(country in military_statistics){
            console.log(country);
            var countryDetails = military_statistics[country];
            var countryPres = countryDetails["head_of_state"];
            var countryPopulation = countryDetails["personnel"]["total_population"];
            var countryReserves = countryDetails["personnel"]["total_fit_for_service"];
            var fitForServicePercent = (countryReserves/countryPopulation) * 100;

            htmlstr += `
            <tr>
                <th scope="row">${country}</th>
                <td>${countryPres}</td>
                <td>${countryPopulation}</td>
            
           `; 

            if(fitForServicePercent.toFixed(1)<30){
                htmlstr += `<td class="font-okay">${fitForServicePercent.toFixed(1)}</td>`;
            }else if(fitForServicePercent.toFixed(1) >= 30 && fitForServicePercent.toFixed(1) < 40){
                htmlstr += `<td class="font-omg">${fitForServicePercent.toFixed(1)}</td>`;
            }else{
                htmlstr += `<td class="font-holy-moly">${fitForServicePercent.toFixed(1)}</td>`;
            }

            htmlstr+=`</tr>`;
        }

         console.log(htmlstr);
         document.getElementById("countryTable").innerHTML = htmlstr;
    }).catch(error => {
        console.log(error.message);
        
    });


    console.log("===[END] display_default() ===")

}
