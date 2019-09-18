import React, { useEffect } from 'react';
import { connect } from "react-redux";
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

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
        <h2>Here is results:</h2>
        <Card.Group>
        {console.log(quote)}
          <Card>
          {quote.map(item => (
            <Card.Content key={Date.now() + item.probability}>
              <Card.Header>{item.language_name}</Card.Header>
              <Card.Meta>Percentage is: {item.percentage}%</Card.Meta>
              <Card.Description>
                Probability of {item.language_name} language is {item.probability}
              </Card.Description>
            </Card.Content>
          ))}
          </Card>
        </Card.Group>
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