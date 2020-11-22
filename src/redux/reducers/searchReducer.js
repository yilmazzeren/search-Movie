import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"

export default function searchReducer (state = initialState.values , action) {
    switch (action.type) {
        case actionTypes.GET_SEARCH_DETAILS:
            return action.payload
        default:
            return state;
    }
}