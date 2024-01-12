// general delay of everything
function blockMainThreadfor5Seconds() {
    const start = Date.now();
    while (Date.now() - start < 5000) {
        // this does nothing for 5s (=5000ms)
    }
}

// setTimeout function with callback
setTimeout(() => {
    console.log('callback function');
},
    3000)


// animations timed

animateButton.addEventListener("click", () => {
    animateButton.disabled = true;

    // giving a promise to the computer that i will return once time is run out and then returning the promised object
    const soccerPromise = animateBall(soccer).then() => {
        animateBall(basketball);
        // and so on... but this is complicated, so using await for multiple commands
    };
    console.log(soccerPromise);
    animateButton.disabled = false;
})

// in the console (broswer) check:
// PromiseState is "fulfilled" to check if promise function was successful

animateButton2.addEventListener("click", () => {
    animateButton.disabled = true;

    // giving a promise to the computer that i will return once time is run out and then returning the promised object
    const soccerPromise = animateBall(soccer)
    await animateBall(basketball);
    await animateBall(tennisball);
    // usw...
};
console.log(soccerPromise);
animateButton.disabled = false;
})

// async functions up close: 

async function myFunction() {
    return 42
}
console.log("my Function:", myFunction());
// console is logging 
// my Function: 
// Promise {fulfilled: 42}

// adding .then() : 
myFunction().then((result) => {
    console.log("result:", result);
});

// or adding await:
(async myFunction() {
    const result = await myFunction()
    console.log(result);
}) ()

async function myFunction() {
    throw new Error('Something went wrong!')
    return 42
}

// THROWING AN ERROR
function throwError() {
    throw new error('error thrown')
}
// telling js to try to throw the error 
try {
    throwError()
}
// then catch it and display the error message for the event 
catch (event) {
    console.log("oh something went wrong")
}
// finally executing something even if there is no try{} in the function throwError()
finally {
    console.log("finally something is being executed")
}
throwError();
// shows up like an ordinary error in console 


