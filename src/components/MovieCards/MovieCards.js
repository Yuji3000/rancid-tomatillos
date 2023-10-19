import "./MovieCards.css";


function MovieCards({ allMovieData}) {
  return allMovieData.movies.map((movie) => {
    return (
      <div className="thumbnail">
        <img src={movie.poster_path} className="movie-img" alt="oppsie"/>
        <h2 className="movie-titles">{`${movie.title}`}</h2>
      </div>
    );
  });
}

export default MovieCards;

