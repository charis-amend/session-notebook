// anonymous  vs named callback  

// if we only use the "console.log("save")" for the return of the saveButton then we use a anonymous
// we use the named callback if we need thee function somewhere else as well




// anonymous function 

// defining EventListeener for save Button

// dont have to name the function:
// the console.log is doing the function 
// can you use arrow function 
// need "function" as keyword

saveButton.addEventListener("click", function () {
    // the console.log is doing the function 
    console.log("save")
})

// THIS function onCancel() inside is the MACHINE

// then the function/machine is being triggered by:


// named Callback

// 1----hardcoded value: 
cancelButton.addEventListener("click", onCancel)
// this is finished! no  {}

// this is the function named Button 
function Button() {
    const button = document.createElement("button");
    button.textContent = "alert";
    return button
}

// 2----dynamic version:
cancelButton.addEventListener("click", onCancel)

// this is the function named Button 
function Button() {
    const button = document.createElement("button");
    button.textContent = text;
    // another function which determines what the button should do
    button.addEventListener("click", () => {
        console.log("clicking")
    })
    return button
}

//
const alertButton = Button("login")
buttonContainer.append(alertButton)

// 
const logInButton = Button("log in")
buttonContainer.append(logInButton)


// ------- Replacing the function for button click
//  function which determines what the button should do
// button.addEventListener("click", () => {
//     console.log("clicking")
// })

function Button("text, logIn") {
    const button = document.createElement("button");
    button.textContent = text;
    // another function which determines what the button should do
    button.addEventListener("click", () => {
        console.log("clicking")
    })
    return button
}




// -------------------- mapping arrays: ------------------------------------
// if we use map()


// process for:
// [1, 2, 3, 4] => [2, 4, 6, 8]

originalArray = [1, 2, 3, 4]

function myMap() { }

// function where we change change the element of the function
// the changedArray has 2 functions:
// 1. myMap for the originalArray and
// 2. a unnamed function for each element inside the originalArray
const changedArray = myMap([1, 2, 3, 4], function (element) {
    // this changes each element in the array myMap *2 
    // 1*2, 2*2, ....
    return element * 2
    // if we write return element +2 it will change it in the function myMap () {}
})

// implementing the process of array-change into function myMap() {} :

// we are getting the elements inside the originalArray  
function myMap(originalArray, callback) {

    // defining const for the result of the change of the array
    const result = []

    // say it should change the elements in the array: 
    for (element of array) {

        // creating a variable for the changed array it callbacks the element of the changedArray:
        const changed = callback(element)

        // this push the content of the variable const changed to the const result: 
        result.push(changed)
    }
    // this returns the variable result:
    return result
}

