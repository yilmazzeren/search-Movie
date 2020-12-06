import * as actionTypes from "./actionTypes";

export function viewDetailSuccess(detail) {
    return {
        type: actionTypes.VIEW_DETAILS,
        payload:detail
    }
}

export function viewDetail(title) {
     
    return function (dispatch) {
      let url = `http://www.omdbapi.com/?t=$${title}&plot=full&apikey=d03ca61b`;
      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(viewDetailSuccess(result)));
        
    };
  }