/*
    
Name:   
Email:  

*/

function calculate(amount,interest,goal) {
     // YOUR CODE GOES HERE

     console.log(interest);

     if(amount < goal){
          let yearToAchieve = Math.log(goal/amount) / Math.log(1 + (interest/100));
          roundedYearToAchieve = Math.round(yearToAchieve);
          let totalAmount = amount * (1 + (interest/100))**roundedYearToAchieve;
          roundedTotalAmount = Math.round(totalAmount * 100) / 100;
     }else if(amount = 0){
          roundedYearToAchieve = 0;
          roundedTotalAmount = Math.round(0 * 100) / 100;
     }else{
          roundedYearToAchieve = 0;
          roundedTotalAmount = amount;
     }
     


     document.getElementById("savingResults").innerHTML = `
       <h4 class="resultTitle">Result</h4>
       <table class="table table-bordered">
          <tr>
               <td>You will achieve your goal in (years):</td>
               <td>`+ roundedYearToAchieve + `</td>
          </tr>
          <tr>
               <td>You will get ($):</td>
               <td>`+ roundedTotalAmount +`</td>
          </tr>
       </table>
     `;
}