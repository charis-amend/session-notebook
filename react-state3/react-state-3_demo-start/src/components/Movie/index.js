import "./Movie.css";

export default function Movie({ id, name, isLiked, onDeleteMovie, onToggleLike }) {
  return (
    <section className="movie">
      <h2 className={`movie__title${isLiked ? " movie__title--is-liked" : ""}`}>
        {name}
      </h2>
      <div className="movie__actions">
        <button
          onClick={onToggleLike}
          className="movie__button"
          type="button"
          title={isLiked ? "unlike movie" : "like movie"}
        >
          {isLiked ? (
            <span role="img" aria-label="Thumbs up">
              👍
            </span>
          ) : (
            <span role="img" aria-label="Thumbs down">
              👎
            </span>
          )}
        </button>
        {/* need to add the id into the onDeleteMovie function  */}
        {/* need to add the id into this file as a prop above*/}
        {/* adding "<Movie id={movie.id}" in app.js file */}
        <button onClick={() => onDeleteMovie(id)} className="movie__button" type="button" title="delete movie">
          ✕
        </button>
      </div>
    </section>
  );
}
