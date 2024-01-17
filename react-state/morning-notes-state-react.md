# STATE REACT

In React we work with state by using the useState hook function.

this is the useState hook function:

`import { useState } from "react";`

## example for useState Function:

```jsx
function SocialMediaPost() {
  // current state variable: "liked" and "setLiked()"
  const [liked, setLiked] = useState(false); // default value
  // set() function to change state: "setLiked()"
  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <article>
      {/*text to say if like-button has been clicked: */}
      <p>Liked: {liked ? "Yes" : "No"}</p>
      <button type="button" onClick={toggleLiked}>
        {/*if statement for the setLiked() function: */}
        {liked ? "Remove like" : "Add like"}
      </button>
    </article>
  );
}
```

1. We call the useState function and pass the initial state value as argument:

   This is the value that is used in our app until something changes.

   --> default value: `useState(false);`

2. Calling the useState function gives us two things in return:

   1. a variable with the current state as value

   `const [liked, setLiked] = useState(false);`

   and

   2. the set function to set a new state

   `function toggleLiked() {setLiked(!liked);}`

## State functions

A React component can have multiple states. You can use the useState function as much as you need.

see down below example with likes, comments and views. all can be in the same component function SocialMediaPost()

### naming convention

for React apps that the state variable and the function always follow the pattern of x and setX

```js
function SocialMediaPost() {
    const [liked, setLiked] = useState(true or false);
    const [comments, setComments] = useState(["strings"]);
    const [views, setViews] = useState(0 or 1 or 2 numbers);

    return("return statement")
}
```

### typeof data storing in state:

You can store all kinds of data in state:

- booleans
- numbers
- strings
- objects
- arrays

## destructuring assignment

> Destructuring is like opening a package and directly taking out what you need, instead of taking the whole package and then picking out the items.

why is there no name for the variable?

`const [liked, setLiked] = useState(false);`

like this with a variableName ?

`const variabeName [liked, setLiked] = useState(false);`

### WHY

In JavaScript, useState is a function that returns an array with two elements.

- The first element is the current state value (in your case, liked)
- The second element is a function that lets you update that state (in your case, setLiked).
- In your code, useState returns a "package" (an array), and you directly take out the two things you need: liked and setLiked.

#### -> There's no need for an additional variable like variableName because liked and setLiked are directly extracted from the array that useState returns.

`const [liked, setLiked] = useState(false);`

If we didn't use destructuring, the code would look like this:

```js
const arrayReturnedByUseState = useState(false);
const liked = arrayReturnedByUseState[0];
const setLiked = arrayReturnedByUseState[1];
```
