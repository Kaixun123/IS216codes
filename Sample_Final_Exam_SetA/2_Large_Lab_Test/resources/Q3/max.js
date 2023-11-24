/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2020

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

    // YOUR CODE GOES HERE: START

    // console.log("here");

    let resList = [];
    let maxNumber = 0;

    axios.get(url1)
    .then(res1 => {
            axios.get(url2)
            .then(res2 => {
                for(r1 in res1.data){
                    if(isNaN(res1.data[r1])){

                    }else{
                        console.log(res1.data[r1]);
                        resList.push(res1.data[r1]);   
                    }
                }
                for(r2 in res2.data){
                    if(isNaN(res2.data[r2])){

                    }else{
                        console.log(res2.data[r2]);
                        resList.push(res2.data[r2]);   
                    }
                }

                if(resList.length > 1){
                    maxNumber = Math.max.apply(Math,resList);  
                }
 
                console.log(maxNumber);
                if(maxNumber === 0){
                    document.getElementById(ele_id).innerHTML = url1 + " : " + res1.data + "<br>" + url2 + " : " + res2.data + "<br>" + "Max : " + "No number"
                }else{
                    document.getElementById(ele_id).innerHTML = url1 + " : " + res1.data + "<br>" + url2 + " : " + res2.data + "<br>" + "Max : " + maxNumber
                }

            })
            .catch(err => {
                console.error(err); 
                document.getElementById(ele_id).innerHTML = url2 + "<br>" + err
            })
    })
    .catch(err => {
        console.error(err); 
        document.getElementById(ele_id).innerHTML = url1 + "<br>" + err
    })


    // YOUR CODE GOES HERE: END
}
