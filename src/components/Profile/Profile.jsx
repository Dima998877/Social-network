import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.profile}>
    <img src='https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000' className={s.wallpaper} alt='wallpaper' />
    <div>icon+discrip</div>
    <MyPosts />
  </div>
}

export default Profile;