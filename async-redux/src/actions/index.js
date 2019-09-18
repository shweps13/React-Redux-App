import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";
export const UPDATE_REQUEST = 'UPDATE_REQUEST';


export const getQuote = (props) => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
    // console.log("axios props", props)
  axios
    .put(`http://api.languagelayer.com/detect?access_key=${props.access_key}&query=${props.request}`)
    // .then(res => console.log(res.data.results))
    .then(res => {
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUOTE_FAILURE, payload: err });
    });
};

export const updateRequest = request => {
    console.log(request);
    return { 
        type: UPDATE_REQUEST, 
        payload: request 
    };
  };