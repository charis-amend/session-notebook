# how to

1. add in html file this:
   JavaScript modules (sometimes also called "ECMAScript Modules" or "ESM") are a way to organize code into separate files. To use modules you have to let the browser know that you are using modules. This is done by adding the type="module" attribute to the `<script>` tag.
   `<script type="module" src="./my-module.js"></script>`

2. create script.js file
   this is the main js file where all the js files fo each function are being imported

   for example: importing header.js
   import {header} from "./js/header.js"

3. for each function we use globally in all of the project we create a utilities folder
   inside of the utilities folder we collect for each function a separate .js file

   for example:
   in the header.js we have a function called function decipheringText ()
   we also use it in another file card.js

   1. we create a utilities folder
   2. we create decipheringText.js
   3. we import decipheringText.js into header.js
   4. import decipheringText from ".utilities/decipheringText.js"
   5. we have to write export in front of the function decipheringText ()
      export function decipheringText ()

4. making function default in header.js file

   1. in decipheringText.js we create the function like this:
      export default decipheringText ();
   2. renaming the function if its the default
   3. if we only importing the default into the script.js we write it like this:
      import decipheringText from "../utilities/decipheringText.js"
      Otherwise use
      import {decipheringText} from "../utilities/decipheringText.js"

5. importing data from separate js file
   1. create a file with a variable that has an array with a list of authors for example

### ATTENTION

1. do everything part by part, don't structure everything at once
