// defining function  


// function with parameters
const square  = function(x){
    return x * x 
}

console.log(square(12))

// function without parameters

const makeNoise = function(){
    console.log("Hey Ho");
}
makeNoise()

// function with multiple parameters

const power = function (base,exponent) {
    let result = 1;
    for (let index = 0; index < exponent; index++) {
       result *= base; 
    }
    return result;
}
console.log(power(2,10))

// visible scope 
let x = 10; 
if(true){
    let y = 20;
    let z = 30;
    console.log(x + y + z)  
}
// console.log(y) y and z is not visible
// console.log(x + z)


// define value in parameters 
const halve = function(n){
    return n / 2 ;
}

const n = 10;

console.log(halve(100))
console.log(n)


const hummus = function(factor){
    // create ingredient function 
    const ingredient = function(amount, unit ,name){
        // ingredient mount 
        let ingredientAmount = amount * factor;
        // unit about ingredient ....
        if(ingredientAmount > 1){
           unit += "s" ; 
        }
        // show ingredients
        console.log(ingredient(`${ingredientAmount}  ${unit}  ${name}`))
    }

}


// Array function 

const powerwithArrayFunction = (base,exponent) => {
      let result = 1 ;
      for (let count = 0; count < exponent; count++) {
           result *= base; 
      }
      return result;
}


// square 
const square1 =  (x) => { return  x * x}

console.log(square1(4))

const square2 = x => x * x 

console.log(square2(2))