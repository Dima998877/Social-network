import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabrl2VTWfpp7MbwZp6gVKWPv5C_3Xkx-VlQ&usqp=CAU" alt="user_avatar" />
    {props.message}
    {props.likes}
  </div>
}

export default Post;