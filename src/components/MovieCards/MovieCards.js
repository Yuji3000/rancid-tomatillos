import "./MovieCards.css";
import { Link } from 'react-router-dom'


function MovieCards({ title, img, id }) {
  return (
    <div className="thumbnail" key={id}>
      <Link to={`/movies/${id}`}>
        <img src={img} className="movie-img" alt="oppsie"/>
      </Link>
      <h2 className="movie-titles">{`${title}`}</h2>
    </div>
  )
}

export default MovieCards

