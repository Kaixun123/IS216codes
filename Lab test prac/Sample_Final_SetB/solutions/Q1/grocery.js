/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

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

    var itemName = document.getElementById("groceryItem").value; //from the input text box

    if( itemName == "" ) {
        document.getElementById("groceryItem").setAttribute("placeholder", "Aiyo! Enter item name!");
        return;
    }

    if( !is_item_available(itemName) ) {
        document.getElementById("groceryItem").value = "";
        document.getElementById("groceryItem").setAttribute("placeholder", "Sorry! Don't have it!");
        return;
    }

    var groceryList_div = document.getElementById("groceryList");
    var linebreak = document.createElement("br");


    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox";
    checkbox.name = "myItems"; 
    checkbox.value = itemName; 
    checkbox.id = itemName; 

    // creating label for checkbox 
    var label = document.createElement('label'); 

    // assigning attributes for  
    // the created label tag  
    //label.htmlFor = "id"; 

    // appending the created text to  
    // the created label tag  
    label.appendChild(document.createTextNode(itemName)); 
    label.style.margin = "5px";

    groceryList_div.appendChild(checkbox); 
    groceryList_div.appendChild(label);
    groceryList_div.appendChild(linebreak);

    document.getElementById("groceryItem").value = "";
    document.getElementById("groceryItem").setAttribute("placeholder", "Enter item name");

}

function processItems() {

    // Check if alert notification was added previosly
    // If so, remove it
    var notification = document.getElementById("notification");
    if( notification ) {
        notification.remove();
    }

    var checkbox_item_arr = document.getElementsByName("myItems");
    //console.log(checkbox_item_arr);
    

    // Check if at least 1 item is selected
    var count = 0;
    for(var i = 0; i < checkbox_item_arr.length; i++) {
        //console.log(checkbox_item_arr[i]);

        if( checkbox_item_arr[i].type == "checkbox" ) {
            if( checkbox_item_arr[i].checked == true ) {
                count++;
            }
        }
    }

    // console.log("Count: " + count);
    // return;


    if( count == 0 ) {
        //alert("Hello");
        var main_container_div = document.getElementById("main_container");
        var div = document.createElement("div");
        var text = document.createTextNode("You need to select items for calculation!");
        div.appendChild(text);
        div.setAttribute("id", "notification");
        div.setAttribute("class", "alert alert-danger");
        div.setAttribute("role", "alert");
        div.setAttribute("style", "margin-top: 20px")
        main_container_div.appendChild(div);
        return;
    }
    

    var item_list;
    var total_cost = 0.0;
    var found;

    item_list  = "<ul style='list-style: none'>";
    //console.log(checkbox_item_arr);

    for (var checkbox_item of checkbox_item_arr) {
        if (checkbox_item.checked){
            console.log(checkbox_item.value);

            var price;
            for (var i in shopList) {
                if (shopList[i].item == checkbox_item.value){
                    price = shopList[i].price;
                }
            }

            item_list += `
                <li>` + checkbox_item.value + " - $" +  price.toFixed(2) + `
                </li>`
            total_cost += price;
        } 
    }

    item_list  += `
            </ul>`;

    item_list += `
        <br>The total cost is : $` + parseFloat(total_cost).toFixed(2);

    document.getElementById("result").innerHTML = item_list;

}