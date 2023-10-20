import './App.css';
// import { movieData } from '../../movieApi/movieData.js';
import MovieCards from '../MovieCards/MovieCards';
import Header from '../Header/Header';
import { useState, useEffect} from 'react'
import fetch from 'node-fetch';

function App() {
  const [movieCards, setMovies] = useState([])
  
  useEffect(() => {
    getAllMovies();
  }, []); 

  function getAllMovies(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.log(error.message))
  }
 
  return (
    <main className="App">
      <Header />
      <div className="card-container">
        <MovieCards allMovieData={movieCards}/>

      </div>
    </main>
  );
}

export default App;
