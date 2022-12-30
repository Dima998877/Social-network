import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    { message: "Hello! It's my first message!", likesCount: "48" },
    { message: "Welcome to chat!", likesCount: "5" },
  ]
  return <div>
    <div>My posts
      <div>
        <div><textarea /></div>
        <button> Publish</button>

      </div>
      <div className="s.posts">
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />

      </div>
    </div>
  </div>
}

export default MyPosts;