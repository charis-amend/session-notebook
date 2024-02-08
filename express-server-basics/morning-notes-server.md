# What is a server

- server === machine running something
- client is the users device/machine
- has these files:
  - they are created and hosted on the server
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

- webserver (makes requests to the database)
- hardrive
- database
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

-> source code has not a server with react frameworks
-> google is looking at the view-source document and there is nothing there

- look at document:
  - `view-source:localhost:3000`
  - index.html only references the index.js bundle file
    -> then created next.js, which is supports server-side rendering
    -> next.js gives Google (SEO) the fully pre-rendered website
    -> next.js is running its own server

### -> keep client-side rendering as small as possible!!

example:
webshop with 10000 tshirts
all tshirts should be rendered on the server side, otherwise the clients internet and device will be overloaded a lot!

#

# Creating a Server Application

1. Create an app from scratch using `npm init`

## Example route: GET / - root route, returning text

This tells the server to respond to a specific request for the root route
It sends a plain text response -- this is not HTML!
so then do this in index.js file:

```js
app.get("/", (request, response) => {
  // Logged in the terminal on the SERVER side
  console.log("Someone wants the root route!");
  // Sent to the client (visible in the browser window)
  response.send("Welcome to our site! 😎");
});
```

in the view-source localhost it only shows the string above!!
--> Welcome to our site! 😎
in browser dev console:

GENERAL:

- request URL localhost 3000
- reqeuest Method is GET
- status code 200 ok

RESPONSE HEADERS:

- content length
- content type
- date, time, ...
  > this is only the stuff shown on the server side

## Example route: GET / - returning HTML

1. creating html file
2. instead of the string we would like tto send back the content of the html file
3. very important:
   1. specificy the path of the local created server
   2. we need the absolute path of the current directory!
   3. import path module:
      import path from "path"
   4. then create variable:
      `const directoryName = path.directoryName(new URL (import.meta.url)`
      `console.log(directoryName)`
      `res.sendFile(path.join(directoryName, "index.html"));`

## Example route: GET / - returning about.json file

> req = request
> res = response

```js
const about = {content of json file}
app.get("/about.json", (req, res) => {
res.json(about)
})
```

## Example route: GET /staff/:name with a variable/parameter

- Instead of creating many routes for exact paths, we could create a route with a variable part: a placeholder for any value!
- This saves us the difficulty of maintaining many specific routes

```js
const name = req.params.person;
app.get("/staff/:person", (req, res) => {
  // Get the actual value sent for the parameter from `req.params`
  res.json({
    name: name,
    description: `${name} is a valued employee here are our company!`,
  });
});
```

## POSTING to the server - receive the contact form, redirect to /

1. need to create a route but with contact form!
   `const directoryName = path.directoryName(new URL (import.meta.url)`
   `console.log(directoryName)`
   `res.sendFile(path.join(directoryName, "contact-form.html"));`

2. we need a post request and not a get request.
3. so changing the form method
   `<form method="POST"`
4. but it still returns a 404 error
5. so then use this:
   `app.use(express.urlencoded())`
6. refer to the form data:
   `console.log(req.body.message)`
7. can also use
   `res.redirect()`
8. other person wont see the console log in browser, only in the terminal

## Server side methods:

// request methods // CRUD backend methods

1. GET --- READ
2. POST --- CREATE
3. PUT / PATCH --- UPDATE
4. DELETE --- DELETE
5. HEAD

i can do a GET / request in terminal:

- then i receive the header information about html document
- AND then displays the html doc

i can do a HEAD/ request in terminal:

- it only displays the header information about a html document

#### why using POST to transfer data and not GET???

---> post requests are NOT CACHED!!!
whenever we add data anddd create a resource on server side we need to use something else then GET!!!
for example POST

- in case we have url called search?filter=shirts&price=50...
- something between server and client needs to cache data
- user 1 is going to shop page
- server shows all the shiirts
- then user 2 needs all shirts
- server knows there is no change in shirts between user1 and user2
- so server caches all of the shirts in a MEMORY STORAGE (CACHE)
- then it quickly can display the shirts for both users.
-
-
-
