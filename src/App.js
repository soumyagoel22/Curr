import React from "react";
import "./App.css";
import Post from "./Post";

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <div className="app_header">
        <img
          className="app_header_image"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt=""
        />
      </div>
      <h1>Hello</h1>
      <Post />
      {/* Post */}
    </div>
  );
};

export default App;
