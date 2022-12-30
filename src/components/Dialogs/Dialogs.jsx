import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'
import props from 'prop-types';


let path = '/dialogs/' + props.id;

const DialogsItem = (props) => {
   return (
      <div className={s.contact}>
         <NavLink to={path} >{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = () => {

   let dialogsData = [
      { name: 'Ann', id: '1' },
      { name: 'Pete', id: '2' },
      { name: 'Nick', id: '3' },
      { name: 'Marie', id: '4' },
   ]

   let messageData = [
      { message: 'How are you today?', id: '1' },
      { message: 'Look what I found!', id: '2' },
      { message: 'Hi!', id: '3' },
   ]

   return (
      <div className={s.dialogs}>
         <div>Dialogs</div>
         <div className={s.dialogs_items}>
            <div className={s.contact_list}>
               <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
               <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
               <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
               <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />

            </div>
            <div className={s.messages}>
               <Message message={messageData[0].message} id={messageData[0].id}/>
               <Message message={messageData[1].message} id={messageData[1].id}/>
               <Message message={messageData[2].message} id={messageData[2].id}/>
               

            </div>
         </div>
      </div>
   )
}

export default Dialogs;