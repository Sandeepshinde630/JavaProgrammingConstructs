const lengthOfArray = 5;

var numbers = new Array();
for (let i = 0; i < lengthOfArray; i++){
    let randomNumber = Math.floor(Math.random() * 100) + 1 ;
    numbers[i] = randomNumber;
}
console.log(numbers);

let MINIMUM_NUMBER = numbers[0];
let MAXIMUM_NUMBER = numbers[0];

for (let j = 0; j < lengthOfArray; j++){
    if(MAXIMUM_NUMBER < numbers[j]){
        MAXIMUM_NUMBER = numbers[j];
    }
    
    if(MINIMUM_NUMBER > numbers[j]){
        MINIMUM_NUMBER = numbers[j];
    }        

}
console.log("Maximum Number : " + MAXIMUM_NUMBER);
console.log("Minimum Number : " + MINIMUM_NUMBER);