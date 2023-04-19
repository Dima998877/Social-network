import React from 'react';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
    <div className={s.friends_item}>
      <div className={s.friend_icon}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU' alt='userIcon'"
          alt="user Icon"
        />
      </div>
      <div className={s.friend_name}>{props.name}</div>
    </div>
  );
};

export default FriendsItem;
