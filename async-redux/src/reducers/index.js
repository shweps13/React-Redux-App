import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS,
    FETCHING_QUOTE_FAILURE,
    UPDATE_REQUEST
  } from "../actions";  
  
  
  const initialState = {
    access_key: "98ccbe4524cb7f7d09e38b4c2a13401a",
    request: "How is it going?",
    quote: null,
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: "",
          request: action.payload
        };
    case FETCHING_QUOTE_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
    case FETCHING_QUOTE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          quote: action.payload
        };
    default:
        return state;
    }
  };
  