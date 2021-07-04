import axios from "axios";

export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const SAVE_MOVIE = "SAVE_MOVIE";

export const ADD_MOVIE_START = "ADD_MOVIE_START";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";

export const FETCHING_MOVIE_START = "FETCHING_MOVIE_START";
export const FETCHING_MOVIE_SUCCESS = "FETCHING_MOVIE_SUCCESS";
export const FETCHING_MOVIE_FAILURE = "FETCHING_MOVIE_FAILURE";



export const getMovies = () => (dispatch) => {
    // console.log("getCharacters API called  page number :",pageNumber)
     dispatch({type: FETCHING_MOVIE_START});
     axios.get(`http://localhost:5000/api/movies`) 
     .then(response => {  dispatch({ type: FETCHING_MOVIE_SUCCESS, payload: response.data});
     console.log("getCharacters API called  success:",response.data)
      })
     .catch(err => {dispatch({ type: FETCHING_MOVIE_FAILURE, payload: err });}
     )}

export const markComplete = (clickedItemId) => (dispatch)=> {
        dispatch({type: TOGGLE_COMPLETE, payload: clickedItemId});
    }

export const addMovie = (movie) => (dispatch)=> {
    dispatch({type: ADD_MOVIE_START});
    axios.post(`http://localhost:5000/api/movies/`, movie)
    .then(response =>  {  
        dispatch({ type: ADD_MOVIE_SUCCESS, payload: response.data});
      })
      .catch(err => {dispatch({ type: ADD_MOVIE_FAILURE, payload: err });}
      )
    }

export const updateMovie = (clickedItemId) => (dispatch)=> {
        dispatch({type: UPDATE_MOVIE, payload: clickedItemId});
    }

export const toggleComplete = (clickedItemId) => (dispatch)=> {
        dispatch({type: TOGGLE_COMPLETE, payload: clickedItemId});
    }

