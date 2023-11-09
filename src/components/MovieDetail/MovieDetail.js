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
        <div className="image-container">
          <img src={movie.backdrop_path} className="movie-backdrop" alt={movie.title} />
        </div>
        <section className="movie-details-container">
          <div className="movie-details-box">
            <iframe
              title="YouTube movie trailer"
              className="selected-movie-trailer"
              width="92%"
              height="400px"
              src={`https://www.youtube.com/embed/${trailer}`}
            ></iframe>
            <h2 className="mTitle">{movie.title}{movie.tag_line}</h2>
            <p className="single-movie-overview">{movie.overview}</p>
            <p className="single-movie-release-date">{movie.release_date}</p>
            <p className="single-movie-release-date">{movie.genres.join(', ')}</p>
          </div>
        </section>
      </div>
    </section>
  );
}

MovieDetail.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetail;
