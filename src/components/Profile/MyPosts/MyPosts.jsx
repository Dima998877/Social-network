import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch( addPostActionCreator() );
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.text_input}>
        <textarea onChange={ onPostChange } ref={newPostElement} className={s.text_input_area} value={props.newPostText} />
        <button className={s.text_input_button} onClick={ addPost }> Publish</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;