/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

*/

function get_max(url1, url2, ele_id) {
    /*
    Assume list1 and list2 are the lists obtained from url1 and url2
    the output to be displayed in HTML element with id ele_id
        url1 + " : " + JSON.stringify(list1) + "<br>" +
        url2 + " : " + JSON.stringify(list2) + "<br>" +
        "max : " + max
    
    For failed AJAX calls, assuming url1 fails
        url1 + "<br>" + error;
    */

    let ele = document.getElementById(ele_id);

    // ajax call to url1
    axios
        .get(url1)
        .then((response) => {
            // receive list from url1 successfully
            let list1 = response.data;

            // ajax call to url2
            axios
                .get(url2)
                .then((response) => {
                    // receive list from url2 successfully
                    let list2 = response.data;

                    // initialize a local variable to null. max will have the largest number from the 2 lists.
                    let max = null;

                    // loop thru list1 to find the maximum number
                    for (item of list1) {
                        if (
                            typeof item === "number" && // current item is a number
                            (max === null || max < item) // max has no value OR max is less than current value
                        ) {
                            // current value is the largest number encountered so far
                            max = item;
                        }
                    }

                    // loop thru list2 to find the maximum number
                    for (item of list2) {
                        if (
                            typeof item === "number" && // current item is a number
                            (max === null || max < item) // max has no value OR max is less than current value
                        ) {
                            // current value is the largest number encountered so far
                            max = item;
                        }
                    }

                    // If max is still null, there is no number in both lists
                    if (max === null) max = "No number";

                    // generate the output to be displayed in browser
                    ele.innerHTML =
                        url1 +
                        " : " +
                        JSON.stringify(list1) +
                        "<br>" +
                        url2 +
                        " : " +
                        JSON.stringify(list2) +
                        "<br>" +
                        "Max : " +
                        max;
                })
                .catch((error) => {
                    // Unable to retrieve url2. Display error
                    ele.innerHTML = url2 + "<br>" + error;
                });
        })
        .catch((error) => {
            // Unable to retrieve url1. Display error
            ele.innerHTML = url1 + "<br>" + error;
        });
}
