import { combineReducers } from "redux";
import searchReducer from "./searchReducer"
import getMovieReducer from "./getMovieReducer"
import addFavoritesReducer from "./addFavoritesReducer"
import viewDetailReducer from "./viewDetailReducer"

const rootReducer = combineReducers({
  // Reducers
  searchReducer,
  getMovieReducer,
  addFavoritesReducer,
  viewDetailReducer
});

export default rootReducer;