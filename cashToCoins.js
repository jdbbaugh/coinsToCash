
const piggyBank = {};

const banker = (money) => {
   money = money *100

   piggyBank.quarters = Math.floor(money / 25);
   money = money - (piggyBank.quarters * 25);
   
   piggyBank.dimes = Math.floor(money / 10);
   money = money - (piggyBank.dimes * 10);
   
   piggyBank.nickles = Math.floor(money / 5);
   money = money - (piggyBank.nickles * 5);

   piggyBank.pennies = Math.floor(money / 1);
   
};

const dollarAmount = banker(.10);

console.log(piggyBank);