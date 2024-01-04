# how to

1. create script.js file
   this is the main js file where all the js files fo each function are being imported

   for example: importing header.js
   import {header} from "./js/header.js"

2. for each function we use globally in all of the project we create a utilities folder
   inside of the utilities folder we collect for each function a separete .js file

   for example:
   in the header.js we have a function called function decipheringText ()
   we also use it in another file card.js

   1. we create a utilities folder
   2. we create decipheringText.js
   3. we import decipheringText.js into header.js
   4. import decipheringText from ".utilities/decipheringText.js"

3. making function default in header.js file

   1. in decipheringText.js we call the function with
      export default decipheringText ();
   2. renaming the function if its the default
   3. if we only importing

4. importing data from separate js file
   1. create a file with the function that does an array with a list of authors for example

### ATTENTION

1. do everything part by part, dont structure everything at once
