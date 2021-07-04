import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';
import UpdateMovie from './Movies/UpdateMovie';
import AddMovie from './Movies/AddMovie';

import { getMovies, addMovie} from "./actions/movieActions";
import { connect } from "react-redux";

const App = (props) => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    //getMovieList();
    props.getMovies()
  }, []);

  return (
    <>
     <div className="add-button">
        <Link to="/add-movie">Add Movie</Link>
      </div>

      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList  />
      </Route>

      <Route path="/add-movie">
        <AddMovie movies={props.state.movieState}   setMovieList={addMovie} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>

      <Route path="/update-movie/:id">
        <UpdateMovie setMovieList={setMovieList} movies={movieList} />
      </Route>
    </>
  );
};

function mapStateToProps(state){
  console.log("State mapStateToProps",state)
  return {
    state
  }   
};

const mapDispatchToProps =  { getMovies , addMovie}

export default connect(mapStateToProps,mapDispatchToProps)(App);
