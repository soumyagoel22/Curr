import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = () => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          scr="/static/images/avatar/1.jpg"
          alt="rafi"
        />
        <h3>Username</h3>
      </div>
      {/* header -> avatar + username */}
      <img className="post_image" src="" alt="" />
      {/* image */}
      <h4 className="post_text">
        <strong>Username:</strong> caption
      </h4>
      {/* username + caption */}
    </div>
  );
};

export default Post;
