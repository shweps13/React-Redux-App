import React, { useState } from 'react';
import { connect } from "react-redux";
import 'semantic-ui-css/semantic.min.css'

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
      <h3>Type some text for exploring</h3>
      <input
        type="text"
        onChange={handleUserNameInput}
        value={newRequest}
        placeholder="Type few words here"
      />
      <button className="btn btn-large right" onClick={handleChange}>
        Check the language
      </button>
      <p>For example "Matthew is a pianist living in Nashville"</p>
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