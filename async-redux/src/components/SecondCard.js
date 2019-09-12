import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { getQuote } from '../actions/index'

const Quotes = ({ getQuote, quote, isFetching, error }) => {
    useEffect(() => {
      // run action creator when the component mounts
      getQuote();
    }, [getQuote]);
  
    if (isFetching) {
      return <h3>Fetching quote for ya!</h3>;
    }
  
    return (
      <div>
        <h2>Kanye says: {quote}</h2>
        <button onClick={getQuote}>Get New Quote</button>
      </div>
    );
  };

  const mapStateToProps = state => {
    console.log('mSTP state:', state);
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
    { getQuote }
  )(Quotes); // function currying