/*
    
Name:   
Email:  

*/

// DO NOT MODIFY THIS ARRAY
const shopList = [
    { "item": "bread", "price": 1.60 },
    { "item": "milk", "price": 2.95 },
    { "item": "butter", "price": 3.50 },
    { "item": "vegetable", "price": 5.80 },
    { "item": "coffee", "price": 3.60 },
    { "item": "tea", "price": 6.50 },
    { "item": "apple", "price": 0.85 }
];



function addItem() {

    // YOUR CODE GOES HERE  
    console.log('here')
    let foodItem =  document.getElementById('items').value;
    console.log(foodItem);
    
    for(shop of shopList){
        for(items in shop){
            console.log(shop[items])
        }
    }

    document.getElementById("itemList").innerHTML += `
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="${ foodItem }" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${ foodItem }
        </label>
    </div>
    `;

}

function processItems() {

    // YOUR CODE GOES HERE

}