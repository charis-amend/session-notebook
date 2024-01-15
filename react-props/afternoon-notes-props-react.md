# Props REACT

## What are Props

- structure: App
- inside the app: multiple cards
- have one template card === a prop
- then we can pass different info to the same card
- we are rendering:
- pushing props from App to the cards
- going down is easy, you just pass thru the component and get the info
- use the convention "on" before a function, so then you pass the function
- if we use just a word like "isHungry" it will still work, even if tthere is no value given
  `<Pet sound="Meow" name="Cat" onhandleAnimal={handleAnimal} isHungry />`
- cant do if statements in jsx so we need to use this
  `{isHungry ? "Feed me!" : sound}`

- if we need multiple if conditions, then do a separate function and then call it {feedMe()}

#### onClick Event if clicked:

- we need the function to run only when we click:
- so we put it inside a callback function
- onClick={() => function (parameters)}
