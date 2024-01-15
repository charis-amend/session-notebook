# REACT BASICS

- no longer have to create element, eventlistener etc. like in js vanilla
- react is a library to update the browser automatically
- has a lot of REACT libraries
- React provides routing, so it is great for Single Page Applications

## structure in folders

### package.json:

- in package.json we need the scripts: "react-scripts start"
- inside multiple dependencies
- folder structure is given, when we start a react project
- devDependencies:
  - we need eslint plugin react hooks
  - need babel
- within the scripts: this is how we run the application
  - "start": // script react //
  - react scripts start automatically sttarts the DOM and a server to run the application
  - no longer "GO LIVE" necessary

#### jsx and babel

- we use javascript expression jsx language
- in index.js we have a mix of js and html
- browser needs to get the translation from jsx
- for this we need babel
- jsx gives us the

1. run npm i to install react
   - put node-modules in .gitignore file otherwise all the node-modules will be pushed to git everytime (loooot of data!)
   - creates automatically App.js
2. create html file with <div id="root"></div> after <body>
3. query selecting #root from index.html
4. creating a root "createRoot"
5. short version ---> root.render(<h1>hello world</h1>)
   dont need the const helloworld document.create Element, helloworld.textcontent and root.append(helloworld)
6. index.js only contains the basic setup of react

## example creating elements and their className

- creating id for css
- creating className (=like class="")
- insted of `${}` we only can use {}
- a function can return html text
- calling the function <Greeting /> in the root.render()
- we call components with < />
- app has <React.StrictMode> it helps finding bugs and React does tests (similar to eslint)

#### creating components

- create folder "Components" for eg. the function Greeting()
- create index.js inside the "Components/Greeting/index.js"
- only need:
  `import Greeting from "./Components/Greeting"`
- name it index.js not Greeting.js
-

```js
// adding react strictmode:
<React.StrictMode>
    <App />
</React.StrictMode>

function Greeting () {
    const name = "";
    return <div>
    <h1 id="greeting"> Hello {name ? name : "stranger"} </h1>
}

root.render(
  <div>
//   calling the function Greeting() above
  <Greeting />
    <p className="intro">
      {" "}
      I am rendered by <strong>React</strong>
    </p>
  </div>
);
```

# innerHTML vs React

-
- innerHTML.textContent updates every 2seconds
- you can type and itll be deleted every 2 seconds -> very inconvenient
  vs:
- REACT understands more the needs for the whole application
- textfield wont be deleted and only the count number will be updated

# Helper JS

Helper functions are small, reusable JavaScript functions that assist your React components in performing specific tasks. They are like specialized tools that simplify your code by breaking down complex operations into manageable steps.

```js
// Example of a simple helper function
function calculateTotalPrice(quantity, price) {
  return quantity * price;
}
```

Helper functions shine in situations where you need to perform similar operations in different parts of your application:

```js
// Example: A task like validating an email address can be abstracted into a helper function.
function validateEmail(email) {
  // Add validation logic here
  return isValid;
}
```
