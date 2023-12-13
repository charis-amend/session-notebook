console.log(window.location.search);

// creating a new object with variable params with the window location search
const params = new URLSearchParams(window.location.search);

// how i work with this:
// this function gets the value of URLSearchPARAMS
console.log(params.get("color"));

// do this with the dom (document)
// DOM is in the browser
// DOM is created by js, css and html
// everything in the DOM in the browser is an object!

console.log(document.body);
