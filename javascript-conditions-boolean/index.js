let value;

value = false;
value = true;
value = 0;
value = 9;

// add here from session notes!! console.log( value \ etc.

const max = 10;
let number = Math.random() * max;
// Math.random gives us random numbers
console.log("number:", number);

number = Math.floor(number);
console.log("number:", number);

// shorten this code in one line instead of two
number = Math.floor(Math.random() * max);

// method 1
// if (number > 2) {
//   number--;
// } else {
//   number++;
// }
// console.log("after IF calculates number:", number);
// -- means -1 and ++ means +1 !!!!!

// method 2
console.log("number:", number);

const boolValue = number > 2;
console.log("boolValue is:", boolValue);
if (boolValue) {
  number--;
} else {
  number++;
}
console.log("after IF calculates number:", number);
// this wouldd return this in the log:
// number: 9.824783779564639
// number: 9
// boolValue is: true
// after IF calculates number: 8

// very fast method:
// condition if value1 is true, then value2 is false
number > 2 ? number++ : number--;
// number > 2 is if statement
// the ? is separating
// the number++ is saying if statement is true, then do number +1
// : number--  thsi is saying if statmeent is false, then do number -1;

const animal = "cat";
let emoji;
if (animal === "dog") {
  emoji = "_showsdog_";
} else {
  if (animal === "tiger") {
    emoji = "_showstiger_";
  } else {
    emoji = "_?_";
  }
}
// -> shorten this like this

if (animal === "dog") {
  emoji = "_showsdog_";
} else if (animal === "tiger") emoji = "_showstiger_";
else if (animal === "elefant") emoji = "_?_";

// for switch statements i need to tell computer when to stop, we use "break" for this
switch (animal) {
  case "dog":
    emoji = "_dog_";
    break;
  case "elefant":
    emoji = "_elefant_";
    break;

  // and so on case, case, ... at the end break!!
  // then at the end use default!
  default:
    emoji = "_default_";
    break;
}

console.log("show final animal after switch command:", animal);
