readline = require("readline-sync")
let number;
let power = 1;
 number = readline.question("Enter a Number:")
for(let i =1; i<= number; i++)
{
     power = power*2;
}
console.log(power);