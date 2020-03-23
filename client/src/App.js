import React, { useState } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testServer")
    .then(res => res.text())
    .then(res => setApiResponse(res))
  }

  callAPI();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the soon-to-be weather app! <span role="img" aria-label="sun behind rain cloud">🌦</span>
        </h1>
      </header>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
