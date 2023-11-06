import './App.css'
import React, { useState, useEffect } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Nav from '../Nav/Nav'
import { getAllData } from '../../api-calls'
import { Switch, Route} from 'react-router-dom'
import MovieDetail from '../MovieDetail/MovieDetail'
import About from '../About/About'


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllData('/movies').then((data) => {
      setMovies([...data[0].movies])
    })
  }, [])

  return (
    <main className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <MoviesContainer movies={movies} />} />
        <Route
          exact
          path="/movies/:movieId"
          render={({ match }) => <MovieDetail movieId={match.params.movieId} />}
        />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </main>
  )
}


export default App
