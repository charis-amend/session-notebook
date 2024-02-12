# BACKEND CREATE

GET - read
POST - create
PUT/PATCH - update an entry
DELETE - deleting

method: POST

1. jokelist with jokes
2. create jokelist in database
3. connect the jokelist with our "server"(/api/ folder in this case of NEXTJS serverless)
4. show the jokelist in browser for user (client)
5. client has a form in browser page
6. client adds a joke
7. data is being sent with onSubmit function() to our /api/ "Server"
8. then this api updates the database with "POST" method
9. BUT also has to update the frontend!
10. jokelist on browser doesnt show new added joke
11. using mutate:
12. useSWR() to send user to a newly created page, that has the added joke
13. and add mutate() in JokeForm component
14. then user sees new joke in the jokeslist

## how to

-> class example with joke
-> added the Joke Schema

1. in /api/jokes/index.js:

```js
// 1. add method POST
if(request.method === "POST") {
// get the joke data -> with request and request the body:
    const jokeData =  request.body
    await Joke.create(jokeData)
// 2. returning Meldung, if it worked:
    return response.status(200).json({status: joke created})
}
```

2. in /components/JokeForm/index.js

```js
export default function JokeForm() {
  const onJokeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jokeData = Object.FromEntries(formData);
    const response = await fetch("/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  };

  return (
    <form>
      <input name="joke">
        {/* name="joke" of input field needs to be the same as the key from our data from the database -> check in /db/models JokeSchema!! */}
      </input>
    </form>
  );
}
```

## mutate

- so the new created data shows on the browser without a manual refresh
- so we send the user/client to another subpage in the browser
- with Router.push("/")
- everything written after "/" in Router.push("/") will redirect to the other page
  - Router.push("/test") -> url is localhost3000/test

### -> so we need to fetch from the frontend the changed/added data in the database and display it in the frontend/browser.

- in JokeForm-component add inside the JokeForm() this:

```js
const { mutate } = useSWR("/api");
```

- replace `Router.push("/test")`" with:

```js
if (response.ok) {
  mutate();
}
```
