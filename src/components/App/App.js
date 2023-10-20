import './App.css';
// import { movieData } from '../../movieApi/movieData.js';
// import MovieCards from '../MovieCards/MovieCards';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    getAllMovies();
  },
   []); 

  function getAllMovies(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data.movies))
    .catch(error => console.log(error.message))
  }

  return (
    <main className="App">
      <Header />
        <MoviesContainer movies={movies}/>
    </main>
  );
}

export default App;
