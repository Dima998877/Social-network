import React from "react";
import s from './Dialogs.module.css'
import props from 'prop-types';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from "./Message/Message";
import dialogs from "../..";


const Dialogs = (props) => {

   
   
    

   let dialogsElement = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> )

   let messagesElement = props.state.messages.map( m => <Message message={m.message} id={m.id}/>)

   return (
      <div className={s.dialogs}>
         <div>Dialogs</div>
         <div className={s.dialogs_items}>
            <div className={s.contact_list}>
               { dialogsElement }
            </div>
            <div className={s.messages}>
               { messagesElement }
            </div>
         </div>
      </div>
   )
}

export default Dialogs;