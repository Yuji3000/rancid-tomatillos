import './App.css';
import { movieData } from '../../movieApi/movieData.js';
import MovieCards from '../MovieCards/MovieCards';
import Header from '../Header/Header';
import { useState } from 'react'

function App() {
  const [movieCards] = useState(movieData)

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
