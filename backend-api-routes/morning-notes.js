// ------------ api routes -------------
// need to create an backend environment to communicate between own database in the server and the frontend 
// database should never !! directly communicate with frontend
// (database) <--> (own api) <--> (frontend)


// ----------- EXPRESS VS NEXT JS BACKEND -------------
// Express:  
// A traditional web server for example built with the Node.js framework Express is a program running on a server or virtual machine that listens for incoming HTTP requests - like a waiter at a restaurant waiting for customers to place their orders. The code for the Express server is typically written in a so called monolithic structure, where all the different functions and endpoints are managed by the same program.
// vs:
// NEXT JS:
//  Serverless Functions are like little helpers that are only executed on-demand, i.e. when they are needed. They wait for specific things to happen, like when a web applications gets a HTTP request or when a database gets updated. When that happens, the serverless function runs its code to do the specific job it was programmed to do and is terminated afterwards. 
// Serverless cloud provider, like Vercel, take care of all the details like setting up the computer resources needed to run the code and shutting them down when the job is done. It's like having a team of chefs come into the kitchen, cook a dish, and then clean everything up when they are finished.   




// -------------- API in general -------------------
// APIs running on a server environment are called server-side APIs. They are provided by a server
// APIs provided by the browser are called the client. 

// A common use-case for such server-side APIs is to create, read, update and delete data; so called CRUD operations.




// -------------- Next.js API routes -------------------
// It follows a simple folder structure: 
// Any file inside the folder e.g. pages/api/jokes/index.js is mapped to the respective url with the same path e.g. /api/jokes/joke and will be treated as an API endpoint instead of a page.

// 1. create api folder in /pages/
// 2. api folder is responsible for all the functions we tried setting up with express yesterday
// 3. create index.js file in /api/jokes/ folder

// an API route is simply a JavaScript module that exports a default function!!! 
// File pages/api/jokes/index.js creates the API endpoint /api/jokes that responds with a JSON message of "Hello Jokes!". 

// The handler function takes two arguments: 
// 1. a request object  
// 2. response object
// ....which are used to start the serverless programm on vercel and handle incoming requests and send responses back to the client.

// Serverless functions are running on a server! But they are running without any additional configuration and they will just run the Code that is in the function defined.
// in index.js file:
import { jokes } from "lib/data"
// creating the route ---> serverless function:
export default function handler(request, response) {
    response.status(200).json({ status: "ok" })
}
// -> his function is executed on the server and therefore called serverless. The function itself has no file-system or persistent storage but it accesses the database of  url "/api/jokes/"
// check in browser:
// shows url ---> localhost:3000/api/jokes





// ---------------- Dynamic API Routes --------------------
// Dynamic API Routes to create API endpoints that can handle dynamic parameters in the URL path 
// dynamic apis follows the same file naming rules used for pages


// Create dynamic routes by creating a new file with square brackes like: pages/api/jokes/[id].js: 
// if you want to create an API endpoint that can handle requests for individual jokes 
// 1. create [id].js file
// This creates a dynamic API route where the id parameter can be any value.
// If you want to get a single joke, depending on the jokes id used in the browser route, we can access the id route parameter by destructuring it from request.query object.
// returning a joke that matches a certain id
// always use "handler()" for naming the function
export default function handler(request, response) {
    // with request.query
    const { id } = request.query;
    // find only the joke that matches the id:
    const joke = jokes.find((joke) => joke.id === id)
    response.status(200).json({ status: "ok" })
}

const jokes = [{ id: 0, joke: "only bad joke here" }]; // fill it up or import it from somewhere else

export default function handler(request, response) {
    // values from query object are always strings
    // id from the jokes is a number
    const id = parseInt(request.query.id);
    // -> we need to convert the string to a number with parseInt
    // or: 
    const { id } = parseInt(request.query);
    // find only the joke that matches the id:
    const joke = jokes.find((joke) => joke.id === id)

    if (!joke) {
        response.status(404).json({ status: "Joke not found" });
        return;
    }
    response.status(200).json(jokes);
}

// in JOKE COMPONENT components/joke/index.js 
// changing a joke with POST method:

return (
    <>
        <small>ID: {id}</small>
        <h1>{data.joke} </h1>
        <Link href="/">Back to all</Link>
    </>)

// ---------------- Static routes --------------------
// Create static route by creating a new file under pages/api/jokes/index.js:

const jokes = []; // fill it up or import it from somewhere else

export default function handler(request, response) {
    response.status(200).json(jokes);
}
// Then you can access your first private API route with http://localhost:3000/api/jokes in the browser.

// ---------------- Private API Routes --------------------

// In React you can use your private API routes by just using the useSWR hook like before but passing the relative URL to it instead:

const { data } = useSWR(id ? `/api/jokes/${id}` : null);

// ---> Note that you DON'T need to pass the whole host with http://localhost:3000 because you are running your frontend and backend application together in NextJS.


