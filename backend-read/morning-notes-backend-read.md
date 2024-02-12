# Backend READ

database <--> server (/api folder) <--> browser

- need to contact the database always thru the server
- between database and server we have "MONGOOSE" which helps us with communication between database and server

## mongoose

=== That's an ODM (Object Document Mapper).

- maps the database
- transforms data in object to work with
- gives you typo-safety (number vs string problem)
- we can model the data how we want it
- prevents mistakes
- modeling with nodeJS

#### Reasons to use mongoose as ORM:

It helps building a schema and querying the database (it's also our db driver).
It has to run on the server, because database access is not secure in the browser.
Remember: We already have a server (= Next.js API routes).

## Difference between ORM and ODM

#### ORM (Object Relation Mapping):

- technique to perform CRUD operations to mainly relational databases (MySQL, PostgreSQL, etc.),
- uses an object-oriented paradigm
- like excel spreadsheet with rows and columns => you cannot add a field to one entry that doesn't exist for all
  is mapped to a single object for all entries.

#### ODM (Object Document Mapping):

- like ORM for non-relational databases (MongoDB)
- uses a document-oriented paradigm

## process example from class

1. model data:
   1. create "/db" folder
   2. import mongoose from "mongoose"
2. using mongoose's SCHEMA.
3. creating the schema in "Joke.js" -> parallel file to the component "Joke"

```js
const { Schema, models, model } = mongoose;
const jokeSchema = new Schema({
  id: { type: String, required: true },
  joke: { type: String, required: true },
});
```

4. creating a model
   1. creating Joke variable
   2. this creates the model
   3. and then "jokeSchema" defines how it should look like, see above
5. destructuring with moongose:
   1. import "models and model" from the mongoose package

```js
const Joke = models.Joke || model("Joke", jokeSchema);
export default Joke;
```

6. create connect.js in "/db" folder.
7. in "connect.js":
   1. copy-paste MONGODB_URI from NEXTJS Documentation
   2. https://github.com/spiced-academy/coriander-web-dev/blob/main/sessions/backend-read/assets/connect.js
   3. function dbConnect makes the connection possible between our server (/api) and mongoose.

---- now connection from mongoose to database ----

8. create new database in MongoDB

   1. database name "jokes-database"
   2. collection name !!!! very important:
      1. call the model the **singular** version --> "Joke.js"
      2. and then collection name in **plural** --> "jokes" in mongoDB

9. insert the data into a new created document
10. mongoDB creates IDs automatically
11. json file add properties in "" quotes, fix it with top right button
12. mongoDB uses a special ID-string-type -> its a **ObjectID('abc123')**
13. mongoDB calls its IDs with **\_id:**

14. create ".env.local" file in root
15. Files called .env contain environment variables: secrets like usernames and passwords
16. These files should be ignored by git inside of the .gitignore file.

```js
MONGODB_URI=//mongodb+srv://.....see the link on mongoDB profile
```

15. on mongoDB.com
    1.  connect Cluster
    2.  connect Driver
    3.  copy-paste mongoDB link with password and username

--- now connection between DB and server and browser established ---

## QUERY DATA

1. in "/pages/api/jokes/index.js" file:

- dont import joke array from the local data.js file
- change the following:

```js
import Joke from "../../db/Joke";
import dbConnect from "../../db/connect";
```

1. query the Joke from the database db folder
2. query the setup connect.js file db folder
3. need to await the dbConnect
4. define the method if GET or POST or or or ...
5. set try-catch with response.status(200) and error, in case something is not working
6. after "Joke." in "await Joke.find()" you can see all the methods which are possible in mongoose

```js
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const jokes = await Joke.find();
      console.log(jokes);
      response.status(2000).json(jokes);
    } catch (error) {
      console.error(error);
    }
  }
}
```

7. console.log(jokes) above and then look in terminal
   1. the console.log is on the server -> terminal
   2. not in browser dev console
8. if data that we entered in collection document in mongoDB displays in console.log then we know the connection is truthy and working

--- features on the website are not working... why? ---

> normally clicking on joke in joke-list opens the joke. we do this with dynamic routing useRouter.
> but now its no longer working because we using the database.
> now we need to adjust the subpage "[id].js" as well and connect it to the database.

9. open "[id].js" file
10. add the connection:
    1. add dbConnect
    2. need to change "id" to "\_id" in JokesList Component!!! because of mongoDB default IDs

```js
import useSWR from "swr"
import dbConnect from "../../db/connect";

export default async function handler(request, response) {
    await dbConnect(); // --> connecting to database
    // add routing again:
    const {id} = request.query;
    // get the id from database to find the selected Joke from database
    // ADD AWAIT!!!!!!
    const joke = await Joke.findByID(id)

        // in case of an error:
        if(!joke) {
        return response.status(404).json({"joke not found"})
}
        response.status(200).json(joke)
}
```

11. in "Joke" Component i can use {data.joke} dont need to map() over it!
