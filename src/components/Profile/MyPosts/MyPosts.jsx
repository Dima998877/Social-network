import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return <div>
    <div>My posts
      <div>
        <div><textarea /></div>
        <button> Publish</button>
      </div>
      <div className="s.posts">
        {postsElements}
      </div>
    </div>
  </div>
}

export default MyPosts;