import React, { useEffect, useState } from 'react';
import axios from 'axios';



function MainCard() {

const [newRequest, setNewRequest] = useState("");
console.log(newRequest)

const access_key = "98ccbe4524cb7f7d09e38b4c2a13401a"

const fetchData = () => {
  axios
  .put(`http://api.languagelayer.com/detect?access_key=${access_key}&query=${newRequest}`)
  .then(res => console.log(res))
  .catch(err =>  console.log(err));
}


const handleUserNameInput = e => {
  setNewRequest(e.target.value);
};

const handleChange = e => {
  setNewRequest(e.target.value);
  fetchData()
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




export default MainCard;
