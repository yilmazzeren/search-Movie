import { combineReducers } from "redux";
import searchReducer from "./searchReducer"
import getMovieReducer from "./getMovieReducer"
import addFavoritesReducer from "./addFavoritesReducer"
const rootReducer = combineReducers({
  // Reducers
  searchReducer,
  getMovieReducer,
  addFavoritesReducer
});

export default rootReducer;