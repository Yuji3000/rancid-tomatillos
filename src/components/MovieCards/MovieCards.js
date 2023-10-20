import "./MovieCards.css";


function MovieCards({ title, img, id }) {
  return (
    <div className="thumbnail" key={id}>
      <img src={img} className="movie-img" alt="oppsie"/>
      <h2 className="movie-titles">{`${title}`}</h2>
    </div>
  );
}

export default MovieCards;

