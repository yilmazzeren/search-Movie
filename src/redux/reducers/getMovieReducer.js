import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState"

export default function getMovieReducer (state = initialState.movie , action) {
    switch (action.type) {
        case actionTypes.GET_MOVİE_SUCCESS:
            return action.payload
        default:
            return state;
    }
}