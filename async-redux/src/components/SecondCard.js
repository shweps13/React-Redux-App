import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { getQuote, updateRequest } from '../actions/index'

const Quotes = ({ access_key, request, getQuote, quote, isFetching, error }) => {
    useEffect(() => {
      // run action creator when the component mounts
      getQuote({access_key, request});
    }, [request]);
  
    if (isFetching) {
      return <h3>Fetching quote...</h3>;
    }
  
    return (
      <div>
        <h2>Response is: {quote}</h2>
      </div>
    );
  };

  const mapStateToProps = state => {
    console.log('mSTP state in SecondCard:', state);
    return {
      access_key: state.access_key,
      request: state.request,
      quote: state.quote,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getQuote, updateRequest }
  )(Quotes); // function currying