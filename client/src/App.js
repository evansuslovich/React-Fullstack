import React from "react";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

import {
  Route, Routes, Link
} from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Link to="/createpost"> Create a Post </Link>
      
      <Link to="/"> Homepage </Link>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element = {<Post />} />
      </Routes>
    </div>
  );
}

export default App;

