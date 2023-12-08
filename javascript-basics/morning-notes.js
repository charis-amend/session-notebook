// selecting body from html in js file:
const body = document.querySelector('[data-js="body"]');
console.log("document:", document);

console.log("body:", body);

// selecting the class
body.classList.add("blue");

// adding classes and removing class to change styles

body.classList.add("blue");
body.classList.remove("blue");

const myLoggingButton = document.querySelector('[data-js="logging-button"]');

// translating elements from html to js
// in html we call it logging-button
// but save it as a myLoggingButton

console.log("myLoggingButton:", myLoggingButton);

// EVENTS
// define which event we want to hear

// myLoggingButton.addEventListener('events for example click', write here a function);
// function = this specific is a call-back-function
myLoggingButton.addEventListener("click", (event) => {
  console.log("You clicked a button:", event);
});

// ()=>{} this is called a arrow function
// (put here name of event)=>{then put console.log here}
// then open html in browser to check

// to clear out console:
console.clear();

// defining mainElement
const mainElement = document.querySelector('[data-js="main"]');
console.log("mainElement:", mainElement);
