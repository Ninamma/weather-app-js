import React, { useState } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState(something());
  function something() {
    return (
      <div>
        Welcome to the soon-to-be weather app! <span role="img" aria-label="sun behind rain cloud">🌦</span>
      </div>
    )
  }
  function callAPI() {
    fetch("http://localhost:9000/compare")
    .then(res => res.text())
    .then(res => setApiResponse(res))
  }

  callAPI();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        {apiResponse}
        </h1>
      </header>
    </div>
  );
}

export default App;
