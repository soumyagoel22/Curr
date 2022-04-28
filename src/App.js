import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

const App = () => {
  const [post, setPost] = useState([
    {
      username: "kazi",
      caption: "wow! it works",
      imageUrl:
        "https://simg.nicepng.com/png/small/31-315310_react-hexagon-react-js-transparent-background.png"
    },
    {
      username: "kazi",
      caption: "wow! it works",
      imageUrl:
        "https://simg.nicepng.com/png/small/31-315310_react-hexagon-react-js-transparent-background.png"
    }
  ]);

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
      {post.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      <Post
        username="kazi"
        caption="wow! it works"
        imageUrl="https://simg.nicepng.com/png/small/31-315310_react-hexagon-react-js-transparent-background.png"
      />
      <Post
        username="hey"
        caption="wow! amazing"
        imageUrl="https://simg.nicepng.com/png/small/31-315310_react-hexagon-react-js-transparent-background.png"
      />
      <Post
        username="yeah"
        caption="wow! great"
        imageUrl="https://simg.nicepng.com/png/small/31-315310_react-hexagon-react-js-transparent-background.png"
      />
      {/* Post */}
    </div>
  );
};

export default App;
