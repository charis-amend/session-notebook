// functions --- INPUTS (morning session)

// why using functions:
// if you want changes for your applications, without functions, you would have to change every spot manually
// with functions we can change all things at once
// ----> one source of truth

// function declaration: (hoisting a function/like Flagge hissen)
function greet() {
  console.log("hello");
}
// this is only the function = the machine is built, but not turned on!
// "greet" is name of function!
// consolelogs in function is only for us to check. later the consolelog will be replaced.

// calling the function (machine is turnedd on)
// this is called an argument
greet();
// calling the function BEFORE the written function, it still works! But for a variable it doesnt work

// can also  run the function multiple times:
greet();
greet();
greet();
// then logs 3x "hello"

// Changing input-output

// 1. adding PARAMETER "name" for function and consolelog
function greet(name) {
  console.log(name);
}

// 2. creating ARGUMENT, the string for hello sven
// greet("sven");
// // or
// const user = "sven";

// 3. creating string for hello marcell
greet("marcell");
// logs marcell

// !!!!ATTENTION!!!!
// if
greet();
// logs undefined

// if
greet("sven", 23);
// logs sven only

// 3. adding "hello" to function:
function greet(name) {
  console.log("hello" + name);
}
greet("sven");
// logs hello sven
greet("gimena");
// logs hello gimena

// --------------------------------------

// doing SUMMING

function sum(a, b) {
  console.log("the result of the calculation is:", a + b);
}
// functions should only be repobsibel for some piece of logic, not many things at once
// a + b are only variables only valid inside of the functions

// if
sum(3, "hello");
// logs "3hello" --- only returns a string because b is undefined typeof

// if
sum(3);
// logs NaN!!! ---- a is 3 but b is undefined, so it logs Not a Numer = NaN

sum(3, 5);
// logs result of calc is 8

// --------------------------------------

// SCOPE
// where can i access a value and where can i not

function sum(a, b) {
  // local scope (consolelogs works)
  const result = a + b;
  console.log(result);
}
// global scope
sum(2, 7);
// logs 9 ----- if i use const result
console.log(result);
// logs ERORR
// if i log console.log(result) OUTSIDE OF THE FUNCTION
// logs ERROR!!!
// ---> have to put console log inside function! variable is only valiid inside function

// a and b are local variables, are only available inside function!
// cant do:
console.log(a);
console.log(b);
// logs error!

// DECLARING VARIBALE IN GLOBAL SCOPE

// global scope:
const name2 = "sven";

// function:
function sum(a, b) {
  console.log(name2);
  // local scope:
  const result = a + b;
}

sum(2, 7);
console.log(name2);
// logs sven
sum(name2);
// logs a=sven und b=undefined ---> logs "svenundefined"
console.log(result);
// logs error app crrash!
