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

    reslist = [];
    max = 0;
  
    axios.get(url1)
    .then(res1 => {
        axios.get(url2)
        .then(res2 => {
            //console.log(res)
            for(r1 in res1.data){
                reslist.push(res1.data[r1]);
                console.log(reslist);
            }
            for(r2 in res2.data){
                reslist.push(res2.data[r2]);
                console.log(reslist);
            }

            for(list in reslist){
                console.log(reslist[list]);
                if(typeof reslist[list] === 'number'){
                    if(reslist[list] > max){
                        max = reslist[list]
                    }
                }
            }


            document.getElementById(ele_id).innerHTML = `${url1} : ${JSON.stringify(res1.data)} <br/>`;
            document.getElementById(ele_id).innerHTML += `${url2} : ${JSON.stringify(res2.data)} <br/>`;
            
            if(max > 0){
              document.getElementById(ele_id).innerHTML += `max : ${max} <br/>`;  
            }else{
                document.getElementById(ele_id).innerHTML += `max : No Number <br/>`;    
            }
            

            reslist=[]
            max = 0
        })
        .catch(err => {
            //console.error(err); 
            document.getElementById(ele_id).innerHTML = `
            ${url2} <br/>
            <p>Error: ${err}</p>
            `;
        })
    })
    .catch(err => {
        //console.error(err); 
        document.getElementById(ele_id).innerHTML = `
        ${url1} <br/>
        <p>Error: ${err}</p>
        `;
    })
    
    

    // YOUR CODE GOES HERE: END
}
