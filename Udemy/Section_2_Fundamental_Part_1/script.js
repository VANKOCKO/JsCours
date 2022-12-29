


/**
 *   DataType
 */

// number
let age = 28

// string 

let firstName = 'van'

// Boolean

let fullAge = true 

// undefined    : empty value 

let chlidren 


// null : means empty value 

let js = "Amazing"
//console.log(46 +  8 + 23 - 10 )
let firstname = "Jonas " 
//console.log(firstname)

/**
 *   Declared variable
 *  let, var, const 
 */

// let for variable can change
let yourAge = 30 
// let can update 
yourAge = 31

// const 

const birthYear =  1991
//birthYear = 1990   // error never change 


// var 

var job = 'programmer'
job = 'teacher'

// other way is declared vairbale wihtout type 


lastNames = "Kocko"

//console.log(lastNames)


/**
 *   CamelCase
 */

let firstNamePerson ;

firstNamePerson = "van";
/**
 *   Other langage like Ruby
 */
let first_name;

/**
 *   You cannot 
 * 
 *  let 3Year ::  appear error
 *  let Jonas&Matilde
 *   $function 
 */


let PI = 3.1415
//console.log(PI)

let myFristJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

//console.log(myCurrentJob)

/**
 * 
 *    Execercices 
 */

/**
 *   LECTURE: Values and Variables
            1. Declare variables called 'country', 'continent' and 'population' and
            assign their values according to your own country (population in millions)
            2. Log their values to the console
 */

let country = 'France'
let continent = 'Europe'
let population  = 67000000

//console.log("The country is : " + country + " Where in " + continent + " with arrond : " + population )

/**  
 *    LECTURE: Data Types
 *   1. Declare a variable called 'isIsland' and set its value according to your country. 
        The variable should hold a Boolean value. Also declare a variable
        'language', but don't assign it any value yet
     2. Log the types of 'isIsland', 'population', 'country' and 'language'
        to the console
 */

let  isIsLand = true 
let language = 'Francais'
//console.log(typeof isIsLand)
//console.log( typeof country)
//console.log(typeof population)
//console.log(typeof language)
/** 
 * 
 * LECTURE: let, const and var
 *  
 */

const local = "fr"

/**
 * LECTURE: Basic Operators
            1. If your country split in half, and each half would contain half the population,
            then how many people would live in each half?
            2. Increase the population of your country by 1 and log the result to the console
            3. Finland has a population of 6 million. Does your country have more people than
            Finland?
            4. The average population of a country is 33 million people. Does your country
            have less people than the average country?
            5. Based on the variables you created, create a new variable 'description'
            which contains a string with this format: 'Portugal is in Europe, and its 11 million
            people speak portuguese'
 */

let halfPeople = population /2 

//console.log( "Number of people in each part " + halfPeople )

let inCreasePopulation = population + 1 

let finLandPopulation = 6000000;

//console.log(inCreasePopulation)


if(finLandPopulation > population) {
      //console.log("Finland have more population than France")
}else {
   //// console.log("France have more population than Findland")
}


let description = 'Portugal is in Europe, and its 11 million people speak portuguese'


/**
 *  LECTURE: 
 * Equality Operators: == vs. ===
 */

//let numNeighbours  = prompt('How many neighbour countries does your country have?')

/** 
if(numNeighbours == 1) {
      console.log("Only 1 border!")
}
else if(numNeighbours > 1 ){
     console.log("More than 1 border")
}else {
      console.log("No borders")
}
*/


/***
 *   Basic Operators
 */

// Math Operator
const now = 2037 
const ageJonas = now - 1991
const ageSarah = now - 2018

//console.log(ageJonas, ageSarah)
////console.log(ageJonas * 2, ageJonas / 10, 2 ** 3 )

const firstNameOPerator = 'van'
const lastNameOperatoor = 'kocko'
//cancatenation 
//console.log(firstNameOPerator + " " + lastNameOperatoor)

let x = 10 + 5 

x +=10     // x = x + 10 
x *=4   // x = x * 4 
//x /=3   // x = x / 3 
x++     // x= x + 1
x--    // x = x - 1
//console.log(x)


// Comparator Operator 


//console.log(ageJonas > ageSarah)  // true or false 

//console.log(ageSarah >= 18) // true 


// result result in variable 

const isFullAge = ageJonas > ageSarah 

//console.log(isFullAge)

//console.log(now - 1991 > now - 2018 )

//console.log(25 - 10 - 5)

let k , j

k = j = 25 - 10 - 5 
//console.log(k,j)

const averageAge =  (ageJonas + ageSarah) / 2
//console.log(ageJonas,ageSarah,averageAge)


/**
 *   Challenge 1 
 */

let johnBmi
let markBmi
let markHigherBMI

let massJohn  = 78 

let heightJohn  = 1.69 

let massMark = 92

let heightMark = 1.95


johnBmi = massJohn / ( heightJohn + heightJohn ) 
 
markBmi = massMark / ( heightMark + heightMark ) 

markHigherBMI = johnBmi > markBmi

//console.log (markHigherBMI)

if(markHigherBMI){
   //console.log("He is the john BMI  : " + johnBmi + " is than  mark BMI  : " + markBmi )
}else {
     // console.log("He is the mark BMI  : " + markBmi + " is than  john BMI  : " + johnBmi )
 
}

/**
 *  Concat  String 
 */

const firstNameConCat = "Jonas"
const jobConcat = "teacher";
const birthYearConcat = 1991;

const yearConcat = 2037
const jonas = " I' am " + firstNameConCat + ', a ' +  ( yearConcat - birthYearConcat ) + ' year old ' + jobConcat + ' !' 

//console.log(jonas)

/**
 *   New syntax 
 *   ${ } variable
 */

const jonasNew = `I am ${firstNameConCat} , a ${yearConcat - birthYearConcat  } year old ${ jobConcat } !`

//console.log(jonasNew)

///console.log(`Just a regular string ....`)


//console.log(' String with \n\
//     multiple \n\
//     lines ')


  
//console.log(`String with
//multiple 
//lines `)   


/**
 *   If/ else Statement 
 */

const ageIf = 15;
// const isOldEnough = ageIf >= 18 ;
if(ageIf >= 18){
    // console.log('Sarah can sart driving licence 🚗')
}else {
   const yearsLeft = 18 - ageIf 
  // console.log(`Sarah is to young. wait another ${yearsLeft} years : `)
}


/**
 *   Other example 
 */
const birthYearIf = 2012

let century
if (birthYearIf <= 2000) {
       century = 20 
}else {
       century = 21 
}

//console.log(century)


/**
 *   Type conversion 
 */


const inputYear = '1991'

// convert this string to number with Number() function

//console.log(Number(inputYear), inputYear)
//console.log(Number(inputYear) + 18 )

// convert a text to number 

//console.log(Number("Jonas"))  // display NaN Not a Number 

//console.log(typeof NaN)  // The type is Number 

//console.log(String(23), 23) // 

// Type coercion 

//console.log('I am ' + 23 + ' years old' )

//console.log('I am ' + '23' + ' years old' )

//console.log('I am ' + String(23) + ' years old' )

// disctinction
//console.log('23' - '10' - 3) // minus operator convert to number 

//console.log('23' + '10' + 3) // plus  operateur not  convert but  concat 

//console.log('23' / '2') // it's the same ... convert 

//let n = '1' + 1  // concat : 11 
//n = n - 1  // calculate

//console.log(n)


// convert to boolean 
/** 
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))


const money  = 100; 

if(money){
      console.log("Don't spend it all;")
}else {
       console.log("You should get a job !")
}

let height= 0 ;

if(height){
      
      console.log('YAY! Height is defined')

}else {

       console.log('Height is UNDEFINED')
}

*/


// Equality operator 


const ageEqulOp = 18 

if(ageEqulOp === 18) console.log("You just become an adult :D(strict) ")

if(ageEqulOp === 18) console.log("You just become an adult :D(loose) ")

/**
 * 

//const favourite = Number(prompt("What's your favorite number? "))
if(favourite === 23 ){  // 23 == '23'
  //     console.log("Cool! 23 is a amazing number !")
}else if (favourite === 7 ) {
    //   console.log("7 is also a cool number!")
}
else if (favourite === 9 ) {
      // console.log("9 is also a cool number!")
}
else {
      // console.log("Number is not 23 or 7 or 9 ")  
}


if(favourite !==23) console.log("Why not 23 ?")
 */


//const ageBoolean =  16
//if(ageBoolean === 20 || ageBoolean > 20 ) console.log() 
//else if(ageBoolean > 30 ) console.log() 

const hasDriversLicense = true;    // A 

const hasGoodVision  = true;   // B 


const isTired = false;  // C 



// true && true = true 

// false && false = true

console.log(hasDriversLicense && hasGoodVision)


// use OR  ||  

// true || true = true 

// false || false = true
console.log(hasDriversLicense || hasGoodVision)


console.log(hasDriversLicense || hasGoodVision || isTired)

if(hasDriversLicense && hasGoodVision && !isTired){
     console.log("Sara is able to drive !")
}else {
     console.log("Someone else should drive ...")
}
