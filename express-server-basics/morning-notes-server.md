# What is a server

- server === machine running something
- client is the users device/machine
- has these files:
  - they are hosted on the server
  - and then executed on client side
    - index.js
    - index.html
    - styles.css
- VERY IMPORTANT:
  - where are the files!!
  - the script of the server has no access to my file system - obviously!

A server is an application that listens for incoming requests.
It examines each request, and responds according to the rules it was programmed with.
We use servers all the time, but these are built by other people.
Today we'll build our own.

#### inside the server:

- webserver
- hardrive / database
- we can access also other remote locations

### executing JS in RUNTIME ENVIRONMENT

- in dev console or terminal:
  `node`
  `4+5`
  // logs 9
- with nodeJS i can write js

## difference between NODE JS and browser dev console:

- in dev console browser you can access a DOM element like "document" object or "window" object
- but:
- in NODE JS....
- we dont have "document" object nor a "window" object

#### -> What is Node JS?

- Remember that Node JS is a JavaScript engine that runs on your computer.
- It's quite similar to the JavaScript that we use for the browser.
- However, it includes a lot of modules and logic for handling things that are relevant to servers.
- This includes running processes, listening to incoming requests, sending responses, reading and writing files, and much more.
- These capabilities are not found in the JavaScript we use in the browser.
- Today we'll be using the famous and popular Express library.
- It gives us some convenient and helpful ways to create a server web application.

--> browser cant access and interact with local file system

## image upload how? client to server

- client is filling in a form, picks an image on its device and then submitting
- REQUEST (user is posting)
- RESPONSE (server is responding to the user's request)
- server is putting the image in its own harddrive (database)

## getting status of server

- client is asking if image is on server
- this works with GET API -> asking the server
- then server is POST -ing the response in .json file to the client

### response codes:

- 2.. -> everything ok
  - 200 = okay
  - 201 = resource created
- 3.. -> redirecting something
- 4.. -> error on the client side
  - 400 = bad request (eg data is not in the right format)
  - 404 = not found
- 5.. -> server error

# SERVER-SIDE RENDERING

-> source code not server with react frameworks
-> google is looking at the view-source document and there is nothing there

- look at document:
  - `view-source:localhost:3000`
  - index.html only references the inidex.js bundle file
    -> then created next.js, which is supports server-side rendering
    -> next.js gives Google (SEO) the fully pre-rendered website

### -> keep client-side rendering as small as possible!!

example:
webshop with 10000 tshirts
all tshirts should be rendered on the server side, otherwise the clients internet and device will be overloaded a lot!
