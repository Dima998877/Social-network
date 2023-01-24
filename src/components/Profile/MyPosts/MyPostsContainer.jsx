import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPostsContainer = (props) => {

  let state = props.store.getState()

  // let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  // let newPostElement = React.createRef();

  let updatePost = () => {
    props.store.dispatch( addPostActionCreator() );
  }

  let updatePostChange = (text) => {
    let action = onPostChangeActionCreator(text)
    props.store.dispatch(action);
  };

  return <MyPosts 
  addPost={updatePost} 
  onPostChange={updatePostChange} 
  newPostText={state.profilePage.newPostText}
  posts={state.profilePage.posts}/>
}

export default MyPostsContainer