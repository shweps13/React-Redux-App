import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import { updateRequest, getQuote} from '../actions/index'

function MainCard(props) {

const [newRequest, setNewRequest] = useState("");
console.log(newRequest)
const access_key = "98ccbe4524cb7f7d09e38b4c2a13401a"



const handleUserNameInput = e => {
  setNewRequest(e.target.value);
};

const handleChange = e => {
  setNewRequest(e.target.value);
  props.updateRequest(newRequest);
};

  return (
    <div className="MainCard">
      <input
        type="text"
        onChange={handleUserNameInput}
        value={newRequest}
        placeholder="username..."
      />
      <button className="btn btn-large right" onClick={handleChange}>
        Log Names
      </button>

    </div>
  );
}

// const MainCard = ({ getQuote, quote, isFetching, error }) => {
//   useEffect(() => {
//     // run action creator when the component mounts
//     getQuote();
//   }, [getQuote]);


  
//   if (isFetching) {
//     return <h3>Fetching quote for ya!</h3>;
//   }

//   return (
//     <div>
//       <h2>Kanye says: {quote}</h2>
//       <button onClick={getQuote}>Get New Quote</button>
//     </div>
//   );
// };



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
  { updateRequest, getQuote }
)(MainCard); // function currying