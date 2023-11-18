/*
    NAME:
    EMAIL: 
*/
var url1 = "sales1.json"
var url2 = "sales2.json"


function mergeSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE

    axios.get(url1)
    .then((response) => {
        let sales = response.data;
        let authorSales = {} 
        

            for(let item of sales.books) {  
                console.log(item.author)
                if(item.author in  authorSales) { 
                    authorSales[item.author] += item.sales 
                } else {
                    authorSales[item.author] = item.sales
                }
            }


        axios.get(url2)
        .then((response) => {
           let sales2 = response.data;
                
            for(let item2 of sales2.books) {  
                if(item2.author in  authorSales) { 
                    authorSales[item2.author] += item2.sales 
                } else {
                    authorSales[item2.author] = item2.sales
                }
            }

            for(let author in authorSales) {
                let x = { "author": author, "sales": authorSales[author] }
                data.push(x)
            }

                console.log(data);
                display(elem, data, title)
        })
        .catch(err => {
            console.error(err); 
        })
    })
    .catch(err => {
        console.error(err); 
    })

     
}

function sortSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE

    
    axios.get(url1)
    .then((response) => {
        let sales = response.data;
        let authorSales = {} 
        

            for(let item of sales.books) {  
                console.log(item.author)
                if(item.author in  authorSales) { 
                    authorSales[item.author] += item.sales 
                } else {
                    authorSales[item.author] = item.sales
                }
            }


        axios.get(url2)
        .then((response) => {
           let sales2 = response.data;
                
            for(let item2 of sales2.books) {  
                if(item2.author in  authorSales) { 
                    authorSales[item2.author] += item2.sales 
                } else {
                    authorSales[item2.author] = item2.sales
                }
            }

            console.log(authorSales)
            for(let author in authorSales) {
                if(authorSales[author] > 5){
                    let x = { "author": author, "sales": authorSales[author] }
                    data.push(x)  
                }
            }

                console.log(data);
                decsendingdata = data.sort().reverse()
                display(elem, decsendingdata, title)
        })
        .catch(err => {
            console.error(err); 
        })
    })
    .catch(err => {
        console.error(err); 
    })

    
    display(elem, data, title)
     
}