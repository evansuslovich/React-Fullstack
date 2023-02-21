import React from "react";
import  {useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Post() {
  let { id } = useParams(); 
  
  return (
    <div>
    {id}
    </div>
    )
  }