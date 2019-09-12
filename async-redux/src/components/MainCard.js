import React, { useState } from 'react';
import { connect } from "react-redux";

import { updateRequest } from '../actions/index'

function MainCard(props) {

const [newRequest, setNewRequest] = useState("");
console.log(newRequest)



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

const mapStateToProps = state => {
  // console.log('mSTP state in MainCard:', state);
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
  { updateRequest }
)(MainCard); // function currying