
// Binding 

let caught = 5 * 5 
let ten = 10
console.log(ten * ten )

let mood = "light"
console.log(mood)
mood = "dark"
console.log(mood)

let luigisDebt = 140 
luigisDebt = luigisDebt - 35 
console.log(luigisDebt)

let one = 1, two = 2 

console.log(one + two)

var name = "ayda"
const greeting = "Hello"
console.log(greeting + name)



// defin function 
//prompt("Enter pascode")



// return value 

console.log(Math.max(2,4))


console.log(Math.min(2,4) + 100)


//  Control  Flow 

//let theNumber = Number(prompt("Pick a number"))
//console.log("Your number is the square root of " + theNumber * theNumber)


// Conditional Execution 

let theNumbers = Number(prompt("Pick a number"))
if(!Number.isNaN(theNumbers)){
    console.log("Your number is the square root of " +
    theNumbers * theNumbers);
}else{
    console.log("Hey. Why didn't you give me a number?") 
}

if( 1 + 1 == 2 ) console.log("It's true") 


// if else 

let num = Number(prompt("Add number"))
if(num < 10){
    console.log("small")
} else if (num < 100){
    console.log("Medium")
}else {
     console.log("Large")
}

// while and do loop 

let numberLoop = 0 

while (numberLoop <=10)
{
    console.log(numberLoop)
    numberLoop = numberLoop + 2 
}

// Exemple to 2^10 
let result = 1;
let counter = 0 
while(counter < 10){
    result = result * 2 
    counter = counter + 1 
}
console.log(result)


// do while 

let yourName = "van";

do {
   yourName = prompt("Who are you ?")
}while (!yourName);
console.log(yourName)
