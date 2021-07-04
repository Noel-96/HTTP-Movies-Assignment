import { FETCHING_MOVIE_START, FETCHING_MOVIE_SUCCESS, 
    FETCHING_MOVIE_FAILURE,ADD_MOVIE_START, ADD_MOVIE_SUCCESS,
     ADD_MOVIE_FAILURE, SAVE_MOVIE, DELETE_MOVIE, UPDATE_MOVIE,
      TOGGLE_COMPLETE } from "../actions/movieActions";

const initialState = {
    movieState: [],
    movieId: 0,
    loading: false,
    error: "",
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TOGGLE_COMPLETE:
            return { ...state, movieId: action.payload }
        case UPDATE_MOVIE:
            return { ...state, movieId: action.payload }
        case DELETE_MOVIE:
            return { ...state, movieId: action.payload }
        case SAVE_MOVIE:
            return { ...state, movieId: action.payload }
        case ADD_MOVIE_START:
            return { ...state, loading: true }
        case ADD_MOVIE_SUCCESS:
             return {...state, loading: false}   
        case ADD_MOVIE_FAILURE:
            return {...state, loading: false, error: action.payload}  
        case FETCHING_MOVIE_START:
            return { ...state, loading: true }
        case FETCHING_MOVIE_SUCCESS:
            return {...state, loading: false, movieState: action.payload}    
        case FETCHING_MOVIE_FAILURE:
            return {...state, loading: false, error: action.payload}  
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state; 
             
    }

}