const piggyBank = {
    quarters: 4, 
    nickles: 5, 
    dimes: 7, 
    pennies: 89
};
console.log(piggyBank.quarters)
let dollarAmount = (piggyBank.quarters * .25) + (piggyBank.nickles * .05) + (piggyBank.dimes  * .10) + (piggyBank.pennies * .01)
console.log(`$${dollarAmount.toFixed(2)}`);


const dollarAmount2 = 2
const piggyBank2 = {}

