import React, { useState } from 'react';

export default function Home() {
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
    <h1>
      {apiResponse}
    </h1>
  )
}