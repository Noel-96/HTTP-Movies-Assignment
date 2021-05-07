import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";

function MovieList( props ) {
  return (
    <div className="movie-list">
      {
        props.state.movieState.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
    </div>
  );
}



function mapStateToProps(state){
  return {
    state
  }   
};

export default connect(mapStateToProps,null)(MovieList);
