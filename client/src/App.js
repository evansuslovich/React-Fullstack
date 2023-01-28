import React from "react";
import { useEffect } from "react";
import axios from "axios"

function App() {

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response)
    })
  })

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
