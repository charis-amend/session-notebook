# async functions general

### => delaying an execution of a function with a loop

#### but not blocking the whole application!!

might ruin the whole UI/UX experience and might delay other functionalities as well

-> so we want to run these parallel in the background

# ------ # ---------

# setTimeout function

- with a callback function!
- using the setTimeout function in this case
- maintaining a timer in the background and i can use the other elements and refresh the browser

### animations timed

otherwise the other elements wont work when i have an animation and everything will freeze until this one animation is over
-> example 4 balls in class

# ---- PROMISES -----

!!! async functions always return a promise

## use case:

- fetching data
- fetch is an async function
- fetching the data needs time a lot!!!
- so we need to run it parallel to other stuff, so the rest of the web application is not stopped, the computer needs to continue to read the code
- then:
- the return value of the function is a promise
- with a promise the async function is immediately returned
- it is returning a promise (the promise objects then )

- and then when eg all the data is downloaded from somewhere then it goes back to the async function and fulfills the promise

#### promise status options:

- promise pending
- promise settled = fulfilled = resolved

## returning a promise:

```js
function returnPromise() {
  return new Promise((resolve, reject) => {
    resolve(23);
  });
}
```

##### or with an error message and .then() and .catch()

```js
function returnPromise() {
  return new Promise((resolve, reject) => {
    reject("something went wrong");
  });
}

returnPromise()
  .then((result) => {
    console.log("result:", result);
  })
  .catch((event) => {
    console.log(event);
  });
```

#### returning a promise with option .then()

- using .then()
- if async function is done, .then() => {} XYZ should happen

## returning a promise with option await

- waiting until a promise is settled
- one requirement!:
  cannot use keyword await OUTSIDE an async function!!
- i need to wrap it in a async function
- need to put the whole async in () brackets
- the async function is in this case an anonymous function

### how does this work:

- calling the async function
- but i need a way to access the final data (42 in this example)
- so i handle the promise
- "handlePromise()"

---

# ERROR MESSAGES

- certain errors throw commands
- for example:
  - trying to open file which is not allowed or doesnt exist
  - then it throws an error
  - similar to returning undefined
- in this case we would like to modify this returning undefined with a more specific response for the Error

### 1. THROWING AN ERROR --- general approach

```js
function throwError() {
  throw new error("error thrown");
}
```

### 2. try - catch method:

- using this if we want to execute something that could possible go wrong
- so we create an error message in case it really does go wrong
- try and catch is only used for error messages!

```js
function throwError() {
  throw new error("error thrown");
}
// telling js to try to throw the error
try {
  throwError();
} catch (event) {
  // then catch it and display the error message for the event
  console.log("oh something went wrong");
}
throwError();
```

### 3. try - catch - finally method:

```js
function throwError() {
  throw new error("error thrown");
}
// telling js to try to throw the error
try {
  throwError();
} catch (event) {
  // then catch it and display the error message for the event
  console.log("oh something went wrong");
} finally {
  // finally executing something even if there is no try{} in the function throwError()
  console.log("finally something is being executed");
}
throwError();
```

## taking an array of promises

- fetching data
- fetch is an async function
- fetching the data needs time a lot!!!
- so we need to run it parallel to other stuff, so the rest of the web application is not stopped, the computer needs to continue to read the code
- then:
- the return value is a promise
- with a promise the async function is immediately returned
- - returning a promise (the promise objects then )

- and then when eg all the data is downloaded from somewhere then it goes back to the async function and fulfills the promise
