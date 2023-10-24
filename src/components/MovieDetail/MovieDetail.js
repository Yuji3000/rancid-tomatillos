import "./MovieDetail.css";
import { getAllData } from '../../api-calls';
import { Component } from "react";


class MovieDetail extends Component{
  constructor() {
    super()
    this.state = {
      movie: null,
    }
  }


  componentDidMount = () => {
    const { movieId } = this.props;

    getAllData(`/movies/${movieId}`).then(data => {
        this.setState({ movie: data[0].movie })
        // movie = data[0].movie
      })
      .catch(error => {
        console.error('Error fetching movie details:');
      });
    };


  render = () => {
    const { movie } = this.state;
      if (!movie) {
        return <p className='loading'>Loading...</p> 
      } else {
        console.log(movie);
        return (
          <h2 className="mTitle">{movie.id}</h2>
        )

      }
  }

};

export default MovieDetail;