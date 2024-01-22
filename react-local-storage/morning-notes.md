# React Local Storage

if we refresh browsers, the previous made changes on the website should be saved even if the window/application is closed.

## cookies... ;)

- act on the server side!!!
- each browser gives us the option to store the changes on the users browsers

## session storage and local storage

- in dev console tools viewable
- client-side
- never save sensitive data!
- this is only client-side, but still if you save other people's user data then only stuff like dark mode

--> set, retrieve and delete

## session storage

- only available for the time the application is open
- includes browser refresh, closing/oping tab
- BUT NOT quittting the browser application!

## local storage

- available until the browser cache is being deleted
- always saves any item in local storage as a string
  - `localStorage.setItem("keyvalue", 3)`
  - --> would return "string" even though 3 is a number
  - "string-ifies" a number and boolean etc.!
  - but not possible for an object!!

## VANILLA JS:

## saving cookiebanner selection in local storage:

---> see example.js

1.  Eventlistener for button
2.  localStorage. getItem, setItem and deleteItem possible
3.  if condition if local storage item is status "ok"
4.  add try-catch in case seomthing happens

## Stringifying

- saving object in localStoraage with localStorage.setItem("")
- but saves object as a string
- change it back to an object:
  `const javaScriptObject = localStorage.getItem("person")`
  `JSON.parse(javaScriptObject)`

# Local Storage with REACT

- react has a library for this local storage
- using `useState()` to set new `localStorage.set` state:
- import
  `import useLocalStorageState from "use-local-storage-state"`
