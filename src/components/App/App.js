import './App.css'
import React, { Component } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import { getAllData } from '../../api-calls'
import { Switch, Route} from 'react-router-dom'
import MovieDetail from '../MovieDetail/MovieDetail'



class App extends Component{
  constructor () {
    super()
    this.state ={
      movies: [],
    }
  }

  componentDidMount = () => {
    getAllData('/movies').then(data => {
    this.setState({ movies: [...data[0].movies] })
    })
  }



  render = () => {
    return (
    <main className="App">
      <Header />
        <Switch>
            <Route exact path="/" render={ () => <MoviesContainer movies={this.state.movies} />} />
            <Route exact path="/movies/:movieId" render={ ({match}) => <MovieDetail movieId={match.params.movieId} /> }  />
        </Switch>
    </main>
    )
  }
}

export default App