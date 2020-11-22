import * as actionTypes from "../actions/actionTypes";

export default function searchReducer (state = {} , action) {
    switch (action.type) {
        case actionTypes.GET_SEARCH_DETAILS:
            return action.payload
        default:
            return state;
    }
}