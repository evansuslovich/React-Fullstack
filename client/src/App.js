import React from "react";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

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
      </Routes>
    </div>
  );
}

export default App;
