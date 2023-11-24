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

function is_item_available(itemName) {
    for (var i in shopList) {
        if (shopList[i].item == itemName) {
            return true;
        }
    }
    return false;
}

function addItem() {

    // YOUR CODE GOES HERE
    var item = document.getElementById("groceryItem").value
    console.log(item)

    if(item == ""){
        document.getElementById("groceryItem").setAttribute("placeholder", "Aiyo! Enter a item name!")
        return;
    }

    if( !is_item_available(item) ) {
        document.getElementById("groceryItem").value = "";
        document.getElementById("groceryItem").setAttribute("placeholder", "Sorry! Don't have it!");
        return;
    }


    document.getElementById("groceryList").innerHTML += `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="itemChecked" value="${item}" id="itemChecked">
                <label class="form-check-label" for="itemChecked">
                ${item}
                </label>
            </div>`;

    document.getElementById("groceryItem").value = "";
    document.getElementById("groceryItem").setAttribute("placeholder", "Enter item name");

}   

function processItems() {

    // YOUR CODE GOES HERE



}