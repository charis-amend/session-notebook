# difference elements and nodes

element -> html file
nodes (body, head, etc.) -> in the DOM
refering to the DOM: - HTMLCollections - Nodes

# creating an element with js (without queryselector)

if we input something in a text input field
->
then click on submit(=create) it
->
a new element is being created in the DOM
->
to create a new element (for example a list item (see index.js))

## process

1. queryselecting the form where we put info to create a new element
2. queryselecting the input field for the info that is in the new element
3. queryselecting the specific area where the new element should go
4. do a variable to create the new element document.createElement("the new element");

5. create an addEventListener for the event="submitting" the submit button

   1. starting the arrow function
   2. preventing browser default behavior
   3. put variable for creating something new here (local scope) or not if we already have it in the global scope (see step 4.)
   4. take the classList so we .add() the newElement to the specific classList
   5. define what should be in the new created Element with newCard.innerHTML = ``
   6. adding the new element to its separate html section: append(newElement)

   7. write form.reset() at the end of the arrow function eventlistener
