import * as actionTypes from "./actionTypes";

export function addFavorites(favori) {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        payload:favori
    }
}