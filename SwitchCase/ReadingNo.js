readline = require("readline-sync")
let digit = readline.question("Enter Digit between  1 to 10  ")

switch(digit) {
    case  "1" :
        console.log("ONE")
        break
    case "2" :
        console.log("TWO")
        break
    case "3" : 
        console.log("THREE")
        break
    case "4": 
        console.log("FOUR")
        break
    case "5": 
        console.log("FIVE")
        break
    case "6": 
        console.log("SIX")
        break
    case "7": 
        console.log("SEVEN")
        break
    case "8": 
        console.log("EIGHT")
        break
    case "9": 
        console.log("NINE")
        break
    case "10": 
        console.log("TEN")
        break
     default : 
        console.log("Invalid Input")    
}