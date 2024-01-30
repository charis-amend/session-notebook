import { useEffect, useState } from "react";
import useSWR from "swr";

// in _app.js file: 
// const fetcher = (url) => fetch(url).then((response) => response.json())

export default function Joke() {
  const [id, setId] = useState(0);
  // adding the feature if the joke isFunny or not:
  const [jokesInfo, setJokesInfo] = useState([]);

  const { data, error, isValidating, isLoading } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`);
  console.log("data", data)


  function handleToggleJoke(id) {
    console.log("id", id)

    // set the variable for the info: 
    const info = jokesInfo.find((info) => info.id === id)
    // isFunny default is false

    if (info) {
      const newInfo = jokesInfo.map((info) => info.id == id ? { ...info, isFunny: !info.isFunny } : info)
      // or { id: info.id , isFunny: !info.isFunny }

      // set the new Joke INfo: 
      setJokesInfo(newInfo)
    } else {
      const newInfo = [...jokesInfo, { id: id, isFunny: true }]
      setJokesInfo(newInfo)
    }
  }
  const info = jokesInfo?.find((info) => info.id === id) ?? { isFunny: false }
  const { isFunny } = info;

  function handlePrevJoke() {
    setId(data.prevId);
  }

  function handleNextJoke() {
    setId(data.nextId);
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke}
        <span>
          {info.isFunny ? "🤣" : "🥲"}
        </span>
      </h1>

      <button type="button" onClick={() => console.log("toggle Button isFunny")}>
        {info.isFunny ? "start laughing" : "stop laughing"}
      </button>

      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
