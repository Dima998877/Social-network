import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './MyPosts.module.css';

import Post from '../Post/Post';

function MyPostForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.text_input}>
      <textarea
        {...register('postText', {
          minLength: {
            value: 2,
            message: 'max length 2 symbols',
          },
        })}
        placeholder={'Star typing your post'}
        className={styles.text_input_area}
      />
      <button className={styles.text_input_button}> Publish</button>
    </form>
  );
}
const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));
  const addPost = (values) => {
    props.addPost(values.postText);
    console.log(values.postText);
  };

  return (
    <div className={styles.posts_container}>
      <h3>My posts</h3>
      <MyPostForm onSubmit={addPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
