import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

import "../../src/App.css"


export default function Post() {
  let { id } = useParams();
  const [post, setPost] = useState({})


  useEffect(() => {
    axios.get("http://localhost:3001/posts/" + id)
      .then((response) => {
        setPost(response.data)
      })
  }, [])

  return (
    <div className="container">
        <div className="header">
          <h1>ID: {post.id}</h1>
          <h1>Title: {post.title}</h1>
        </div>

        <h1>Username: {post.username}</h1>
        <h1>Text: {post.postText}</h1>

        <br />
    </div>
  )
}