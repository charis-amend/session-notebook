console.log("can you see this comment");

const isANumber = "1";
let amIaNumber = 2;
console.log("constvarfornumber", isANumber);
console.log("letvaramianumber", amIaNumber);

// sum
// is one ofthe variables a string then the values all as a string an dputs one string next to the other.
// if variables are both numbers it does the math
let sumofnumbers = isANumber + amIaNumber;
console.log("sumofthe2numbers", sumofnumbers);
console.log("whattypeofdata", typeof sumofnumbers);

// 2 strings
const myString = "hi class!";
const mystring2 = "really math";

console.log("mystring + mystring2 together", myString + mystring2);

// how to convert a variable's value data type for examaple from string to number
// we use parseInt
let convertedStringtoNumber = parseInt(isANumber) + amIaNumber;
console.log("converted String to aNumber:", convertedStringtoNumber);

// how to add only one
console.log("onlyadding +1:");
console.log("initial amIaNumber value:", amIaNumber);
amIaNumber = amIaNumber + 1;
console.log("adding amIanumber initiaaal value +1", amIaNumber);

// this is a shortcut for the amIaNumber = amIaNumber + 1:
// you take value of the variable amIaNumber, you add 1,
// and then return the new value it immediately and reassign the new value to the variable
amIaNumber += 1;
console.log("new am i a number value which is 3 += 1:", amIaNumber);

// console.log("Math.PI", Math.PI);
const giveMeMore = 3;
amIaNumber += giveMeMore;
console.log("5. amianumber += givememore", amIaNumber);

// SUBTRACT
console.log("type of isanumber", typeof isANumber);
//-> the subtract converts everything to a number
console.log("isanumber", isANumber);
console.log("amianumber", amIaNumber);

let subtractexample = amIaNumber - isANumber;
console.log("subtracting:", subtractexample);
console.log("type of the subtract example:", typeof subtractexample);

/* OVERVIEW SUM AND SUBTRACT 
    1. SUM
        one var is a string
        one var is a number
        -- sum adds the two variables together as two strings

    2. SUBTRACT
        one var is a string
        one var is a number
        -- subtract adds the two variables together as two numbers --> doing math!!

*/

const numberString = "10";
subtractexample = isANumber - numberString;
console.log("subtraacting isanumber - numberstring", isANumber - numberString);
console.log("type of the subtractexample", typeof subtractexample);

// how do i know if a number is even?
// dividing the number by 2 - there should be no remainder
// remainder=2
/* Example:
    10/2=5 --- remainder=0 then even number 
    11/2=5 --- remainder=1 not a even number
*/

// symbol for remainder is %
amIaNumber = 9;
amIaNumber %= 2;
console.log("is amIaNumber an even number? this is the remainder:", amIaNumber);

amIaNumber = 10;
amIaNumber %= 2;
console.log("is amIaNumber an even number? this is the remainder:", amIaNumber);

// Potentiates
// (Potenzen 3^3= 3*3*3= 27)

amIaNumber = 2;
const potentialexample = 2;
amIaNumber = amIaNumber ** potentialexample; //this would be 2^2
console.log("the potenze of amianumber:", amIaNumber);

amIaNumber = 4;
const potentialexample2 = 4;
amIaNumber = amIaNumber ** potentialexample2; //this would be 4^4 = 4*4*4*4
console.log("the potenze of amianumber:", amIaNumber);
