import React, { useState } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState("");

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
