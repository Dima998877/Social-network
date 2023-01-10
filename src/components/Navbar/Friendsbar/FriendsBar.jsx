import React from "react";
import s from "./FriendsBar.module.css";
import props from 'prop-types';
import FriendsItem from "./FriendsItem/FriendsItem";



const Friendsbar = (props) => {

  
  return (
    <div className={s.friends_bar}>
      <div className={s.friends_wrap}>
        <div className={s.friends_header}>Friends</div>
        <div className={s.friends_online}>Online</div>
      </div>
      <div className={s.friends_items_list}>
        <FriendsItem name='Dima' id='1'/>
        <FriendsItem name='Ann' id='2'/>
        <FriendsItem name='Marie' id='2'/>
        <FriendsItem name='Pete' id='2'/>
        <FriendsItem name='Mike' id='2'/>

      </div>
    </div>
  )
}

export default Friendsbar; 