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
