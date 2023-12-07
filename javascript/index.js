// this is a comment

// this was used before 2015
var oldUse;
oldUse = "Try not to use it!";

// the console lets us print what variables we created
console.log("old Use: ", oldUse);

/* to run JS files:
    1. use terminal:
        ls index.js
        node filename.js

    2. use vs code terminal
        go to "RUN"
        click on "run without debugging"
        select the node.js or any other file you would like to run

    3. in the browser
        -> we need an hmtl file for that (see index.html file)
        open developer tools to see the console

        1. create hmtl file
        2. <script src="./index.js" defer></script>
        3. src defined
        4. defer means hmtl file loads first and then the js file

        -> you can put the script tag in the head or in the body: <script src="./index.js" defer></script>
*/

// Starting form 2015

// difference let and const
let newVariableforLETexample = "i can change over time";

// const newVariableWillNotChange;
// const always has to be initialized because the const value will be there forever otherways error
// -> do it like this:
const newVariableWillNotChange = "You are stuck with me!";

// console log is a way to print things in the termin to check if everything is right
console.log("NameOfConstVariableExample", newVariableWillNotChange);
console.log("NameConstVariableExample description", newVariableWillNotChange);

// Booleans:
const BooleanExample = true;
console.log("BooleanExample description", BooleanExample);

// Strings:
const StringExample = "this a string! 1234 %$&";
console.log("StringExample description", StringExample);

// Number:
const NumberExample = 385;
console.log("NumberExample description", NumberExample);

// BigInt
// BigInt sind Zahlen die so groß sind, die nicht dargestellt weerden können
// you tell the variable to reeserve more space
const BigIntExample = 300400600n;
console.log("BigIntExample description", BigIntExample);

// NULL (special)
const NullExample = null;
console.log("nullexample description", NullExample);

// Array
const ArrayExample = ["Element1", 2, "element3", false, 5];
// combining all data types in the array is possible
console.log("arrayexample description", ArrayExample);

// Object
// if we work with objects, we need a key and give each key a certain value
// key= cohortname --- value=coriander
const ObjectExample = {
  cohortName: "Coriander",
  amountStudents: 16,
  academy: "spiced",
};
console.log("ObjectExample description", ObjectExample);

// if we have a undefined variable
let UndefinedExample;
console.log("UndefinedExample description", UndefinedExample);
