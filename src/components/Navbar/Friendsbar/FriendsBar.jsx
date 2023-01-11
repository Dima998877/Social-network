import React from "react";
import s from "./FriendsBar.module.css";
import props from 'prop-types';
import FriendsItem from "./FriendsItem/FriendsItem";



const Friendsbar = (props) => {

  // let friendsData = [
  //   {id: 1, name: 'Dima'},
  //   {id: 2, name: 'Annnsssssssss'},
  //   {id: 3, name: 'Marie'},
  //   {id: 4, name: 'Pete'},
  //   {id: 5, name: 'Mike'}
  // ];
let fiendsElement = props.state.friendsData.map(f => <FriendsItem name={f.name} id={f.id}/>);
  
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