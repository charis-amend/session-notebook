// return statements

// arrow functions

function sum(a, b) {
  const result = a + b;
  // check if value was created
  console.log(result);
  // creating the return statement
  // whatever i put inside the return statement, is being called
  // result= this value is being returned
  return result;

  // if things are BEFORE the return statemen, then the return statement might not show
  // you can return multiple values in an array
  // you cant return multiple arrays
}

// const theResultOfTheFunctionAbove = sum("put here a value for a", "put a value for b here"); for example 2 and 5
const theResultOfTheFunctionAbove = sum(2, 5);
console.log(theResultOfTheFunctionAbove);
// this logs 7
// because it gets the activity that the function above is doing (in this case doing a+b with the const result)
// and writing this in a new variable called theResultOfTheFunctionAbove

// Return statement with if conditions:

function evenOrOdd(number) {
  // check if number is even
  if (number % 2 === 0) {
    //saying what should happen if the number is even
    return "even";
  }
  // saying what should happen if numbeer is not even
  // we can get rid of "else", just say first what should be returned if true and then what should be returned if false
  else {
    return "odd";
  }
}

// arrow function uses this =>

// changing normal function to arrow function

// 1. first have to create a function expression
// no need to name the function
const sum = function (a, b) {
  return a + b;
};

// 2. reemoving function keyword writing =>
const sum = (a, b) => {
  return a + b;
};

// 3. get rid of {}, "return" and a,b inside ()
const sum = () => a + b;

// changing arrow function to function

// 1. adding curly brackets {}
// 2. adding return statement
// 3. adding value of return statement
const greet = () => {
  return "hello";
};
// 4. remove => and const
// 5. add function
function greet() {
  return "hello";
}
