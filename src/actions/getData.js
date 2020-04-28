import axios from "axios";

function start() {
  return {
    type: "GET_DATA_START"
  };
}

function success(data) {
  return {
    type: "GET_DATA_SUCCESS",
    data
  };
}

function failure(error) {
  return {
    type: "GET_DATA_FAILURE",
    error
  };
}

function getDataUrl() {
  return axios.get(`http://starlord.hackerearth.com/TopRamen`);
}

export function getData() {
  return dispatch => {
    dispatch(start());
    return getDataUrl()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
