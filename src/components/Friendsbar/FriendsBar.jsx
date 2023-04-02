import React from "react";
import styles from "./FriendsBar.module.css";
import FriendsItem from "../FriendsItem/FriendsItem";

const Friendsbar = (props) => {

let fiendsElement = props.friendsData.map(f => <FriendsItem key={f.id} name={f.name} id={f.id}/>);
  
return (
    <div className={styles.friends_bar}>
      <div className={styles.friends_wrap}>
        <div className={styles.friends_header}>Friends</div>
        <div className={styles.friends_online}>Online</div>
      </div>
      <div className={styles.friends_items_list}>
        {fiendsElement}
      </div>
    </div>
  )
}

export default Friendsbar; 