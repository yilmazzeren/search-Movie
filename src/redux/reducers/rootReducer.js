import { combineReducers } from "redux";
import searchReducer from "./searchReducer"
import getMovieReducer from "./getMovieReducer"

const rootReducer = combineReducers({
  // Reducers
  searchReducer,
  getMovieReducer
});

export default rootReducer;