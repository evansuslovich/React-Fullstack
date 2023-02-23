import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import "../App.css"


function Home() {
  const [listOfPosts, setListOfPosts] = useState([])

  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then((response) => {
        setListOfPosts(response.data)
      });
  }, [])


  return (
    <div>
      <ul>
        {listOfPosts.map((post, key) => {
          return (
            <div className="container" key={key}>
              <div className="post">
                <div className="header">
                  <h1>ID: {post.id}</h1>
                  <h1>Username: {post.username}</h1>
                </div>

                <h1>Title: {post.title}</h1>
                <h1>Text: {post.postText}</h1>

                <button onClick={() => {
                  
                  navigate("post/" + post.id)
                }}>
                  View
                </button>

                <button onClick={async () => {
                  navigate("/");

                  await axios.delete("http://localhost:3001/posts/" + post.id).then((response) => {
                    setListOfPosts(response.data)
                  })
                }
                }>
                  Delete
                </button>

                <button onClick={async () => {
                  navigate("/update/" + post.id);
                }
                }>
                  Update
                </button>

                <br />
              </div>
            </div>

          )

        })}
      </ul>
    </div>
  )
}

export default Home