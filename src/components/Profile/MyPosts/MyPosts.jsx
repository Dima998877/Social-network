import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  // let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChange(text)
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.text_input}>
        <textarea onChange={ onPostChange } className={s.text_input_area} value={props.newPostText} />
        <button className={s.text_input_button} onClick={ addPost }> Publish</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;