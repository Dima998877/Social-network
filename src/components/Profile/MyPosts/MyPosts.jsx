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
        <Post message="Hello! It's my first message" likes=" 48 likes"/>
        <Post message="Welcome to chat!" likes=" 3 likes"/>
      </div>
    </div>
  </div>
}

export default MyPosts;