import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"

export default function addFavoritesReducer (state = initialState.favorites , action) {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            return  [...state, action.payload]
            
        default:
            return state;
    }
}