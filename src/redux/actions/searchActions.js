import * as actionTypes from "./actionTypes";

export function searchAction(detail) {
    return {
        type: actionTypes.GET_SEARCH_DETAILS,
        payload:detail
    }
}