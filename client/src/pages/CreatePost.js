import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function CreatePost() {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3001/posts", inputs)
      .then((response) => {
        navigate("/")
      })

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={inputs.title || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="postText"
        placeholder="postText"
        value={inputs.postText || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}