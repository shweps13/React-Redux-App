import React from 'react';
import './App.css';

import MainCard from './components/MainCard'
import SecondCard from './components/SecondCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Async Redux - React Redux App
        </h1>
      </header>
      <MainCard />
      <SecondCard />
    </div>
  );
}

export default App;
