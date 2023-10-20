import "./MoviesContainer.css";
import MovieCards from '../MovieCards/MovieCards'

function MoviesContainer({ movies }){
  const allMovies = movies.map(movie => (
    <div className='movie-card' key={movie.id}>
      <MovieCards 
        title = {movie.title}
        img = {movie.poster_path}
        id = {movie.id}
      />
    </div>
  )
  );
  return (
  <div className="moviecard-container">
    {allMovies}
  </div>
  )
}

export default MoviesContainer;