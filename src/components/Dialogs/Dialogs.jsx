import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from "./Message/Message";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/state";

const Dialogs = (props) => {

   let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

   let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

   let newMessage = React.createRef();

   let addMessage = () => {
     props.dispatch(addMessageActionCreator());
   }

   let updateNewMessage = () => {
      let message = newMessage.current.value;
      props.dispatch(onMessageChangeActionCreator(message));
   }
   return (

      <div className={s.dialogs}>
         <h3>Dialogs</h3>
         <div className={s.dialogs_items}>
            <div className={s.contact_list}>
               {dialogsElement}
            </div>
            <div className={s.messages}>
               {messagesElement}
            </div>
         </div>
         <div className={s.text_input}>
            <textarea onChange={updateNewMessage} ref={newMessage} value={props.state.newMessageText} className={s.text_input_area}></textarea>
            <button onClick={addMessage} className={s.text_input_button}>Send</button>
         </div>
      </div>
   )
}

export default Dialogs;