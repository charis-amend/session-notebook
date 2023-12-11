// declare an array
// array is an object
// we can mix string, numbers, boolean etc.
// array can have objects AND functions!
const numbers = [2, 4, 6];
console.log(numbers);

// the order of the array
// 0: 2
// 1: 4
// 2: 6
// 0, 1 and 2 are called index.

// syntax for getting the value from one of the indexs
console.table(numbers[0]);
// getting the number at position 0

// see how many values are stored in the array
console.log(numbers.length);

// selecting the last element
// in the example above the value at position 2 is also the last eelement.
// to use this we have to do do length -1!
console.log(numbers[numbers.length - 1]);
// first computer calculates length of array -> numbers.length
// then minus 1
// and then see what value is at position -1 (the last element)

// changing values at a position in an array -> here at position 1 (which is actually position 2 because 0, 1, 2, ...)
numbers[1] = "x";
console.log(numbers);
// -> this can be also used to add a new value to the array
numbers[3] = "new value";
console.log(numbers);
// if we have empty elements
numbers[8] = "new last element";
console.log(numbers);
// logs this: [ 2, 'x', 6, 'new value', <4 empty items>, 'new last element' ]

// the .push adds the things i write in the () at the end of the array
numbers.push("new pushed element");
console.log(numbers);
// logs this: [ 2, 'x', 6, 'new value', <4 empty items>, 'new last element' ]

// RESTRICTIONS:
// dont change the typeof of a variable. So it has to stay a number or a string or boolean etc.
// CONST of a variable it cant be reassigned!!
const numbersError = 6;
// const numbersError = 7;
// this doesnt work -> error!

// INSTEAD DO:
// has to be "let", with "const" doesnt work
let numbersCorrectReassigning = 42;
numbersCorrectReassigning = numbersCorrectReassigning + 2;
console.log(numbersCorrectReassigning);
// then logs a new value for the variable numbersCorrectReassigning

// removing a value from the array
numbers.pop("new last element");
console.log(numbers);

// numbers.shift

// nested arrays:
const letters = ["a", "b", ["x", "y"]];
letters[2][1];
//      ^   ^
//      this says the second position of letters-array so the whole []
//             the selecting the 'y" because it is value at position 1 in the []
console.log(letters);

// OBJECTS:
const person = {
  name: "charis",
  age: 29,
};

console.log(person);

// in the array we get the element from its position
// it objeect we get the element from the key
// name and age are the keys in this case

// DOCUMENT objects
// document.querySelector();
// error if document is not found, it means, that the node index.js can only be run in a browser not in terminal/local vs code!

// if we try to access a key in a object that doesnt exist:
console.log(person.address);
// !!!! no error! only "undefined"
// !!!! wouldnt crash the app! js is very forgiving
// !!!! if we would write twice the same key it will overwrite the first one. only the last key will be applied

// dot notation
console.log(person.name);

// bracket notation
console.log(person["name"]);

const bracketNotationExample = {
  key: "x",
};
const key = "new value";
console.log(bracketNotationExample[key]);
// logs this: "new value"
// in this case we made the key "key" into a variable inside the log console

// obejct in an object
const person2 = {
  name: "sven",
  age: 45,
  address: {
    street: "friedrichstr",
    number: 12,
  },
};
// maybe log first only the object with all the keys
console.log(person2);
// then log the other keys and/or objects in the other object
console.log(person2.address.street);
// assigning a new value
person2.age = 55;
// now added a key to the object
person2.hungry = true;
// saying one key is the same key
person2.name = person2.firstname;
// then deleting
delete person2.name;

console.log(person2);
