readline = require("readline-sync")

let day = readline.question("Enter the Day : ")

let month = readline.question("Enter the Month : ")

if ( day > 20 && day <= 31 && month == "march"){
    console.log("True");
} else if ( day >= 1 && day <= 30 && month == "april"){
    console.log("True");
} else if ( day >= 1 && day <= 31 && month == "may"){
    console.log("True");
} else if ( day >= 1 && day <= 20 && month == "june"){
    console.log("True");
} else {
    console.log("False");
}