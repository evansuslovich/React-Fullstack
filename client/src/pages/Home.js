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
        {listOfPosts.map((list, key) => {
          return (
            <div className="container" key={key}>
              <div className="post" onClick={() => {
                navigate("/post/" + list.id);
              }}>
                <div className="header">
                  <h1>ID: {list.id}</h1>
                  <h1>Title: {list.title}</h1>
                </div>

                <h1>Username: {list.username}</h1>
                <h1>Text: {list.postText}</h1>

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