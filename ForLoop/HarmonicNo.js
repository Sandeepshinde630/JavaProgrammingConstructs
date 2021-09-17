readline = require("readline-sync")
let number;
number = readline.question("Enter a number");
let harmonic = 1;
for (let i = 2; i <= number; i++)
{
    harmonic += (harmonic)/ i;
}
console.log(harmonic);