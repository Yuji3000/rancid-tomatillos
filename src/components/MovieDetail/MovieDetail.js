import React, { useState, useEffect } from 'react'
import "./MovieDetail.css"
import { getAllData } from '../../api-calls'
import PropTypes from 'prop-types'

function MovieDetail({ movieId }) {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getAllData(`/movies/${movieId}`)
      .then(data => {
        setMovie(data[0].movie)
      })
      .catch(error => {
        console.error('Error fetching movie details')
      })
  }, [movieId])

  if (!movie) {
    return <p className='loading'>Loading...</p>
  } else {
    console.log(movie);
    return (
      <section>
        <div>
          <div className="image-container">
            <img src={movie.backdrop_path} className="movie-backdrop" alt={movie.title}></img>
          </div>
          <section className="movie-details-container">
            <div className="movie-details-box">
              <h2 className="mTitle">{movie.title}{movie.tag_line}</h2>
              <p className="single-movie-overview">{movie.overview}</p>
              <p className="single-movie-release-date">{movie.release_date}</p>
              <p className="single-movie-release-date">{movie.genres.join(', ')}</p>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default MovieDetail

MovieDetail.propTypes = {
  moviedetail: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      tag_line: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  )
};