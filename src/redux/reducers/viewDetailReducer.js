import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"

export default function viewDetailReducer (state = initialState.detail , action) {
    switch (action.type) {
        case actionTypes.VIEW_DETAILS:
            return action.payload
        default:
            return state;
    }
}