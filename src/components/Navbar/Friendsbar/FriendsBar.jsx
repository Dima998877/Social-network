import React from "react";
import s from "./FriendsBar.module.css";
// import props from 'prop-types';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friendsbar = (props) => {

let fiendsElement = props.friendsData.map(f => <FriendsItem name={f.name} id={f.id}/>);
  
return (
    <div className={s.friends_bar}>
      <div className={s.friends_wrap}>
        <div className={s.friends_header}>Friends</div>
        <div className={s.friends_online}>Online</div>
      </div>
      <div className={s.friends_items_list}>
        {fiendsElement}
      </div>
    </div>
  )
}

export default Friendsbar; 