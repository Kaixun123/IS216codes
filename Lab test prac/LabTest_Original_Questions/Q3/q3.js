/*
  NAME:
  EMAIL:
*/
var i=0;
var recipes = [
    {name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
    {name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
    {name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
]

function displayRecipe() {
    document.getElementById("recipeName").innerText = recipes[i].name;

    // Add Code Below
    document.getElementById("ingredientList").innerHTML = ``;

    for(ingred in recipes[i].ingredients){
      console.log(recipes[i].ingredients[ingred]);
      document.getElementById("ingredientList").innerHTML += `<li>${recipes[i].ingredients[ingred]}</li>`;
    }

}

function updateButtonState() {
    // Debug the following code
    // There is no need to add additional code
    if (i==recipes.length)
      document.getElementById("btnNext").disabled = true
    else
      document.getElementById("btnNext").disabled = false
    if (i<0)
      document.getElementById("btnPrev").disabled = true
    else
      document.getElementById("btnPrev").disabled = false
  }


function changeRecipe(advance) {
    // Debug the following code
    // There is no need to add any additional code
    if (advance)
        i++;
    else
        i--;
      
    updateButtonState();
    displayRecipe();
    
}