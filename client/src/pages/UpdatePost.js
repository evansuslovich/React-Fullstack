import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"



export default function UpdatePost() {
  let { id } = useParams();
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    axios.get("http://localhost:3001/posts/" + id)
      .then((response) => {
        setInputs(response.data)
      });
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put("http://localhost:3001/posts/" + id, inputs)
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
      <input type="submit" />
    </form>
  )
}