import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";
export const UPDATE_REQUEST = 'UPDATE_REQUEST';



const access_key = "98ccbe4524cb7f7d09e38b4c2a13401a"

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    .get(`http://api.languagelayer.com/detect?access_key`)
    // .then(res => {
    //   dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote });
    // })
    // .catch(err => {
    //   dispatch({ type: FETCHING_QUOTE_FAILURE, payload: res.data.quote });
    // });
};

export const updateRequest = request => {
    console.log(request);
    return { 
        type: UPDATE_REQUEST, 
        payload: request 
    };
  };