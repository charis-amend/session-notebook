import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";
import { uid } from 'uid'

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function addMovie(newMovie) {
    // passing the new state for adding a new movie 
    // we need an array with all the current movies and the new one
    // we cannot change state directly! 
    // cannot change the array directly with .push() 
    // we need to slice() to create a copy of the existing array
    // const copyArray = [...existingMovies, newMovieElement]
    setMovies([...movies, { newMovie, id: uid() }])
    // adding to the "newMovie" an id, because if we create a new movie with the form
    // then it only creates a name and like/unlike. the id is missing
    // creating a newMovie with a new id:
    // { newMovie, id: uid() } 
  }


  // adding delete functionality to the delete button: 
  // 1. create function 
  // 2. add onClick in Movie in <li></li>
  // 3. add onClick in <button></button> in movie.js
  function handleDeleteMovie(id) {
    console.log("clicked delete button")
    // check if the id of the deleted movie is somewhere matching an id in the list of all movies
    // creating a const variable for the rest of the filtered movies, which shouldnt be deleted
    // if one movie in the list has the same id then it is deleted. 
    // if a movie has not the same id -> movie.id !== id then it is being filtered and added into the list
    const filtered = movies.filter(movie => movie.id !== id)
    setMovies(filtered);
  }


  // addidng like toggle:
  function handleToggleLike() {
    console.log("clicked toggle like")
    // changing the boolean like of the movie:
    // using map() here to only change the boolean and not remove a movie
    // every movie is being returned in the list
    // using an id again, so checking if the id matches a movie and then change this movie's like/unlike boolean
    setMovies(
      // if movie.id matches the given id, then it should return this following object:
      // {...movie, isLiked} creating a new object and spreading the existing items here, and adding the key isLIked
      // need the opposite value of what it is currently---> !movie.isLiked
      movies.map(movie => movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie)
    )
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {/* need to map here, because i cant put the whole object in the jsx need to map every key of the object */}
        {movies.map((movie) => (

          <li key={movie.id}> {/* here the key prop is being used */}
            <Movie id={movie.id} name={movie.name} isLiked={movie.isLiked} onDeleteMovie={handleDeleteMovie} onToggleLike={handleToggleLike} />
          </li>
        ))}
        {/* taking values of every movie and rendering it with .map() */}
      </ul>
      {/* adding the addMovie() here as a aresult of passing the form */}
      <Form onAddMovie={addMovie} />
    </div>
  );
}
