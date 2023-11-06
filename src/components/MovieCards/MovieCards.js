import "./MovieCards.css";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function MovieCards({ title, poster_path, id }) {
  return (
    <div className="thumbnail" key={id}>
      <Link to={`/movies/${id}`}>
        <img src={poster_path} className="movie-img" alt="oppsie"/>
      </Link>
      <h2 className="movie-titles">{`${title}`}</h2>
    </div>
  )
}

export default MovieCards

MovieCards.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};