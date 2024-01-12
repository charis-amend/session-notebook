# typescript

- is an extension of javascript
- we can assign different typeof for one variable. like booleaan, number, string etc. in javascript but in typescript it is different!

### syntax is the same, but have syntax extensions:

- type annotation, say what datatype the variable has:
- variables:
  - let variable: number
  - if i just define the variable let variable = 123 it automatically saves the type of the variable
- in js i can have an array with different typeof for each element
- arrays:
  - but in ts i am not allowed to have different typeofs in a variable AND arrays
- type

#### special features in typescript

- can create the typeof "any"
- try to avoid "any"
- can create our own types

## process

- install typescript in terminal
  - "npm i -D typescript ts-node"
  - i -> means development section
  - creates the "devDependencies" in the package.json file
- first create javascript file index.js
- then typescript file index.ts
- then execute the index.ts through the index.js file! we need always a javascript!
- need a compiler
- creating typescript folder and file:
  - configuring the tsconfig.json file:
  - run in the terminal:
  - npx tsc --init

## rules in typescript to javascript

- the index.js file is empty
- the transfer from index.ts to index.js is done by the tsc config
- the index.js must never be edited!!!!
