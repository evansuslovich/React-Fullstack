import "./App.css"
import React from "react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

function App() {
  const [listOfPosts, setListOfPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then((response) => {
        setListOfPosts(response.data)
      });
  }, [])

  return (
    <div>
      <ul>
        {listOfPosts.map((list, key) => {
          return (
            <div className="container" key={key}>
              <div className="post">
                <div className="header">
                  <h1>ID: {list.id}</h1>
                  <h1>{list.title}</h1>
                </div>

                <h1>{list.username}</h1>
                <h1>{list.postText}</h1>

                <br />
              </div>
            </div>

          )

        })}
      </ul>
    </div>
  );
}

export default App;
