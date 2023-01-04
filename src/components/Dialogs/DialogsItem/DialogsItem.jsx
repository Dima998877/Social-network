import React from "react";
import s from './../Dialogs.module.css'
import props from 'prop-types';
import { NavLink } from "react-router-dom";


let path = '/dialogs/' + props.id;

const DialogsItem = (props) => {
   return (
      <div className={s.contact}>
         <img className={s.contactImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU' alt='userIcon' />
         <NavLink to={path} >{props.name}</NavLink>
      </div>
   )
}



export default DialogsItem;