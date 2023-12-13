// ------ Strings Rules ----------

// strings never can be changed!!
// if a string is turned to upperCaseTo, then a new string is created

let string1 = "text in string no1"

console.log(string1.toUpperCase());
//logs TEXT IN STRING NO1

// string1 was not changed!!! 
// a new string was created!

// -----------------Inside String Change-------------------------

// to do something indside a string use ${}
const exampleChanges =
    "here is alot of text and ${"here is another text"}"

// -----------------Convert string to number-------------------------
// unary x 
let x = '5'

// parseInt()
parseInt("5")

// Number.parseInt

Number.parseInt('5')


// ----------------example --------------------

// if html file is connected to js, we select elements in html first
const nameInput = document.querySelector('[data-js="wordVariable"]');
const colorInput = document.querySelector('[data-js="color"]');
const hoursInput = document.querySelector('[data-js="hours"]');

const output = document.querySelector('[data-js="output"]');

// then write arrow function for an event is happening, in this case "submit"
// and in the arrow function write stuff that should happen if submit event is clicked

form.addEventListener("submit", (e) => {
    // this is important because if we click submit usually the browser refreshes, but we want results of function!
    e.preventDefault();

    // adding the variables from the html data-js
    const wordVariable = Input.value;
    const nameUpperCase = wordVariable.toUpperCase();
    const color = colorInput.value;
    const hours = Number.parseInt(hoursInput.value, 10);


    const story = `

    "DON'T TOUCH IT, ${nameUpperCase}!",`
        // we added the const variable "nameUppercase" inside the string and changed it to upper case
        `
    I yelled as ${wordVariable} was about to touch`
        // added the const variable wordVarible inside string 
        `
    the walls we had painted ${color} not`
        // adding the const variable color 
        `
    ${hours} hour${hours > 1 ? "s" : ""} ago.`
        // adding the const variable hours.
        // then the correct formatting inside the string: 
        // - if 1 is the value, then "hour"
        // - if more than 1 is value then "hours"
        `
    I would have expected their memory to
    last at least ${hours + 1} hours.`
        ;
    ;

    // now the output what should happen according to this arrow function 
    output.textContent = story;
});
