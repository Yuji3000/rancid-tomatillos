import './App.css';
import { movieData } from '../../movieApi/movieData.js';
import MovieCards from '../MovieCards/MovieCards';
import { useState } from 'react'

function App() {
  const [movieCards] = useState(movieData)

  return (
    <div className="App">
      <h1>Not Netflix</h1>
      <MovieCards allMovieData={movieCards}/>
    </div>
  );
}

export default App;
