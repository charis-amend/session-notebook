// ---------------- JS Loops -----------------------------

// 1. the while loop ........

//while(/*condition of variable*/) { code block }
// if the condition is true, the {} code block gets executed

// EXAMPLE
let counter = 0;
// initiating the variable counter for a counting process

// create the function: 
// ENDLESS:
while (true) {
    console.log(counter);
    counter++;
};
// so if i = true --> then console.log(i); and add i++ to start counting always another i+i+i+i...etc

// LIMITED TO 10
// counts from 0 to 10:


const counterTwo = 0;
// -> not reachable weil oben endless loop und vs code understands this

while (counterTwo <= 10) {
    console.log(counterTwo);
    counterTwo++
}

console.log("loop ended");
console.log(counterTwo);

// 2. do --- a loop executed at least at once
// reversing while <-> do
do {
    var input = prompt("Please enter your name.")
} while (
    !input || input.length === 0);

// use case for do {} while {}
// use to use var instead of const/let
// var is function-scoped! it can be used inside the 
// let and const are block-scoped!! inside the block

console.log(input);
// logs the things we entered in the field of the prompt that pops up


// 3. FOR LOOP ........

// for 
// (initialization; condition; execution if condition is true) 
// {the iteration of the same execution loop body is executed}
for (let n = 0; n <= 10; n++) {
    console.log()
};

// 4. the for .. IN loop 

// indx is a variable going thru (=looping) the array
// let indx is referring to the loop in this case:
const arrayExample = [2, 4, 6];
for (let indx in arrayExample) {
    console.log(indx, arrayExample[indx]);
};
// logs 0 = 2, 1 = 4, 3 = 6

// object === unordered
// array === ordered

// example with object

const objectExample = { name: "sven" };

for (let i in objectExample) {
    console.log(i, objectExample[i])
};
// need to use [] for the [i] so it only get the i and not the other stuff in the object

// 5. the for .. OF loop 
// !!! only works for arrays and not objects
for (let element of arrayExample) {
    console.log(element, arrayExample[element])
};