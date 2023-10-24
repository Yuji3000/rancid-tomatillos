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
          <div>
            <div className="image-container">
              <img src={movie.backdrop_path} className="movie-backdrop" alt={movie.title}></img>
            </div>
            <h2 className="mTitle">{movie.title}{movie.tag_line}{movie.overview}{movie.genres}{movie.release_date}</h2>
          </div>
        )
      }
  }

};

export default MovieDetail