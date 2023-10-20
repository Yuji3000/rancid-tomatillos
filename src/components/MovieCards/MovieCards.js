import "./MovieCards.css";


function MovieCards({ allMovieData }) {
  // console.log(allMovieData)
  return allMovieData.map((movie) => {
    return (
      <div key={movie.id} className="thumbnail">
        <img src={movie.poster_path} className="movie-img" alt="oppsie"/>
        <h2 className="movie-titles">{`${movie.title}`}</h2>
      </div>
    );
  });
}

export default MovieCards;

