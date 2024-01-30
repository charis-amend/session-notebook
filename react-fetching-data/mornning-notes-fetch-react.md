# FETCHING IN REACT

### important:

> https://swr.vercel.app/docs/getting-started

- never change the fetched data
- the fetcher and SWR is available globally!!

reinstead of useFetch() we use a custom hook for data fetching with SWR.VERCEL.APP

- it caches the data that we are fetching
- we are making a fetch, the id changes before the joke when clicking on prev or next joke

# HOW

1. add
   `npm i swr`

2. import it
   `import useSWR from "swr";`

3. when it is loading the {isLoading} prop is true, then it is false --> we can work with this

4. adding the **fetcher** as a 2nd argument in the useSWR() function:
   we can add various props for the useSWR(), like isLoading, isValidating

   ```js
   const { data, error, isValidating, isLoading } = useSWR(
     `https://example-apis.vercel.app/api/bad-jokes/${id}`,
     fetcher
   );
   ```

5. using the const fetcher
6. caches the data as long it is fetching
   -> fetcher is fetching for this url. it fetch()es the url, and then returns the response, then transforming it to json() object.

   ```js
   const fetcher = (url) => fetch(url).then((response) => response.json());
   ```

7. import SWRConfig in \_app.js file:
   `import {SWRConfig} from "swr";`

```js
<SWRConfig value={{ fetcher }}>
  <Component {...pageProps} />
</SWRConfig>
```

8. adding the const fetcher in the \_app.js file:

```js
const { data, error, isValidating, isLoading } = useSWR(
  `https://example-apis.vercel.app/api/bad-jokes/${id}`,
  fetcher
);
```

---

## adding the isFunny to the joke:

1. go to the index.js file:
2. adding useState for jokeInfo. JokeInfo includes the info if a joke isFunny or not
   `const [jokesInfo, setJokesInfo] = useState([]);`

3. adding this in return()

   ```js
   <button type="button" onClick={() => console.log("toggle Button isFunny")}>
     {info.isFunny ? "start laughing" : "stop laughing"}
   </button>
   ```

4. replacing the console.log with a function to toggle the button isFunny:

```js
<button type="button" onClick={() => handleToggleJoke(id)}>
  {info.isFunny ? "start laughing" : "stop laughing"}
</button>
```

5. creating the handleToggleJoke() function based on the id

```js
function handleToggleJoke(id) {
  console.log("id", id);
  const info = jokesInfo.find((info) => info.id === id);

  if (info) {
    const newInfo = jokesInfo.map((info) =>
      info.id == id ? { ...info, isFunny: !info.isFunny } : info
    );
    // or { id: info.id , isFunny: !info.isFunny }

    // set the new Joke INfo:
    setJokesInfo(newInfo);
  } else {
    const newInfo = [...jokesInfo, { id: id, isFunny: true }];
    setJokesInfo(newInfo);
  }
}
```

6. creating
   `const {isFunny} = info;`

- so then we can replace everywhere the info.isFunny to isFunny.
