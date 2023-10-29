import "./MovieDetail.css"
import { getAllData } from '../../api-calls'
import { Component } from "react"


class MovieDetail extends Component{
  constructor() {
    super()
    this.state = {
      movie: null,
    }
  }


  componentDidMount = () => {
    const { movieId } = this.props

    getAllData(`/movies/${movieId}`).then(data => {
        this.setState({ movie: data[0].movie })
      })
      .catch(error => {
        console.error('Error fetching movie details')
      })
    }

  render = () => {
    const { movie } = this.state
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
                  <p className="single-movie-release-date">{(movie.genres).join(', ')}</p>
                </div>
              </section>
            </div>
          </section>
        )
      }
  }

};

export default MovieDetail