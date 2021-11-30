import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./moviesTypes";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: payload,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
