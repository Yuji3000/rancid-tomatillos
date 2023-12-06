import React, { useState, useEffect } from 'react';
import './MovieDetail.css';
import { getAllData } from '../../api-calls';
import PropTypes from 'prop-types';

function MovieDetail({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoData = await getAllData(`/movies/${movieId}/videos`);
        const foundTrailer = findTrailer(videoData[0].videos);
        setTrailer(foundTrailer);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  function findTrailer(videos) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].type === 'Trailer') {
        return videos[i].key;
      }
    }
    return videos[0].key;
  }

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getAllData(`/movies/${movieId}`);
        setMovie(movieData[0].movie);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);


  if (!movie) {
    return <p className="loading">Loading...</p>;
  }


  return (
    <section>
      <div>
        <div className='trailer-container'>
          <iframe
            title="YouTube movie trailer"
            className="selected-movie-trailer"
            width="92%"
            height="400px"
            src={`https://www.youtube.com/embed/${trailer}`}
          ></iframe>
        </div>
        <div className="info-container">
          
          {/* <div className='backdrop-container'> */}
            <img src={movie.backdrop_path} className="movie-backdrop" alt={movie.title} />
          {/* </div> */}

          <div className="details-container">
            <div className='details'>
              <div className='details-text'>
                <h2 className='details-title'>{movie.title}</h2>
                <p className='details-runtime'><span>Runtime:</span> {movie.runtime} minutes</p>
                <p className='details-overview'><span>Overview:</span> {movie.overview}</p>
                <p className='details-date'><span>Release Date:</span> {movie.release_date}</p>
                <p className='details-genres'><span>Genres:</span> {movie.genres.join(', ')}</p>
                <p className='details-rating'><span>Average Rating:</span> {movie.average_rating}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

MovieDetail.propTypes = {
  movieDetail: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
    })
  )
};

export default MovieDetail;
