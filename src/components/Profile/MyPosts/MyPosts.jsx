import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return <div>
    <div>My posts
      <div>
        <textarea />
        <button> Publish</button>

      </div>
      <div className="s.posts">
        <Post message="Hello! It's my first message" likesCount="48"/>
        <Post message="Welcome to chat!" likesCount="3"/>
      </div>
    </div>
  </div>
}

export default MyPosts;