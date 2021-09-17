readline = require("readline-sync")
let digit = readline.question("Enter Number  1,10,100,1000.....  ")

switch(digit) {
    case  "1" :
        console.log("ONE")
        break
    case "10" :
        console.log("TEN")
        break
    case "100" : 
        console.log("HUNDRED")
        break
    case  "1000" : 
        console.log("THOUSAND")
        break
    case  "10000" : 
        console.log("TEN THOUSAND")
        break
    case  "100000" : 
        console.log("ONE LAKH")
        break
    case  "1000000": 
        console.log("TEN LAKH")
        break    
     default : 
        console.log("Invalid Input")    
}