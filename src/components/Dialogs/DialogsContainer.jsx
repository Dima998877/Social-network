import React from "react";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

   let state = props.store.getState()

   let addMessage = () => {
     props.store.dispatch(addMessageActionCreator());
   }

   let updateNewMessage = (message) => {
      let action = onMessageChangeActionCreator(message)
      props.store.dispatch(action);
   }
   return <Dialogs updateNewMessage={updateNewMessage} 
   addMessage={addMessage}
   newMessageText={state.dialogsPage.newMessageText}
   dialogs={state.dialogsPage.dialogs}
   messages={state.dialogsPage.messages}
   />
}

export default DialogsContainer;