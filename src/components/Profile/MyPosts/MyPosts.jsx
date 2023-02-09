import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChange(text)
  };

  return (
    <div className={styles.posts_container}>
      <h3>My posts</h3>
      <div className={styles.text_input}>
        <textarea onChange={ onPostChange } className={styles.text_input_area} value={props.newPostText} />
        <button className={styles.text_input_button} onClick={ addPost }> Publish</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;