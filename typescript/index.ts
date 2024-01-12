// --- VARIABLES -----------------------------------------
let variableA: number = 123;
// created the variable A and defined what type it has (number)
// can change const variables -- so we need Readonly to make a variable inmutable!
// ------------------------------------------------------

// --- ARRAYS -----------------------------------------
// specify which typeof of the array has! (string in this case)
const arr: string[];
// need to specify the default value!
const arr: string[] = [];
// if you need an array with different values
// not good approach, create rather a custom type
let myArray: (number | string)[] = [123, "12"];

const array3: Readonly<Array<number>> = []
array3[0]
// not allowed: 
array3.push[0] // -- array3 is readonly!
// ------------------------------------------------------

// --- OBJECTS -----------------------------------------
type User = {
  name: string;
  id: number;
  // optional: email? with the "?"
  email?: string;
};
const user: User = {
  name: "charis",
  // id: 123 -> commented out gives an error!
  // needs to contain name AND THE ID!!
  // typescript needs all keys!
};
const user: User = {
  name: "charis",
  id: 123,
};
// ------------------------------------------------------


// --- TYPE -----------------------------------------
// not typeof ;)

type LoggedInUserID = number | undefined;
const currentUserId: LoggedInUserID = 123;
const currentUserId: LoggedInUserID = undefined;
// can be 2 types number and undefined
// ------------------------------------------------------

// --- INTERFACE -----------------------------------------
// interface and type are almost identical, BUT
// interfaces can be extended and add another item
// type cant!
// can have multiple interface declarations:
interface User {
  name: string;
  id: number;
}
interface User {
  email: "email";
}
interface LoggedInPerson {
  isLoggedIn: boolean;
}
// ------------------------------------------------------

// --- CUSTOM UNION TYPES  -----------------------------------------

type salutation = "hello" | "hi" | "good morning";

let variable: salutation = "hello";
// custom type is salutation
// only hello, hi or good morning possible to be the variables content

// the variable user should have both types (User andd LoggedInPerson)
const user: User & LoggedInPerson {
  name: "sven",
  email: "",
  isLoggedIn: true,
  id: 1243
}
// ------------------------------------------------------

// --- FUNCTIONS -----------------------------------------
// function add(firstargument: number, secondargument: number): number
function add(a: number, b: number): number //return must be number 
{ // it must return the type number
  return a + b
}

// function executeIn3Seconds (callback) { }
// callback has value any so we we needd to define it
function executeIn3Seconds (callback: () => void) {
  setTimeout(callback, 3000);
} 
executeIn3Seconds(() => {console.log("hello")}) 

// getting elements and changing them in array
// need to specify!
let myArray2: Array<String>
function getFirstElement<T>(myArray2: Array<T>): T {
  return myArray2[0]
}
getFirstElement([1,2,3])
getFirstElement([false,false])
// T is a placeholder, to have a parameter for the type
// ------------------------------------------------------

// --- ASYNC FUNCTION -----------------------------------------
async function myAsyncFUnction (): Promise<number> {
  return 123
}
myAsyncFUnction().then(result => {
  console.log(result)
})
// ------------------------------------------------------

// --- CONDITIONS -----------------------------------------
let myArray: (number | string)[] = [123, "12"];
let stringvariable : string
myArray.forEach((element) => {
  if (typeof element == 'string') {
    stringvariable = element as string //forcing the compiler to consider a certain value with "as string"
  }
})
// myArray has number AND string 
// the variable is only a string 
// so we cant do the forEach function because the array has an element which also has a number
// cant assign a number to a string 
// only with "as string"
// ------------------------------------------------------
