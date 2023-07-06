import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../Dialogs/Dialogs.module.css';

const DialogsItem = (props) => {
  const path = '/dialogs/' + props.id;

  return (
    <div className={styles.contact}>
      <img
        className={styles.contactImg}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU'
        alt='userIcon'
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
