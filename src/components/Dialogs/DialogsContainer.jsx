import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {

//    let state = props.store.getState()

//    let addMessage = () => {
//      props.store.dispatch(addMessageActionCreator());
//    }

//    let updateNewMessage = (message) => {
//       let action = onMessageChangeActionCreator(message)
//       props.store.dispatch(action);
//    }
//    return <Dialogs updateNewMessage={updateNewMessage} 
//    addMessage={addMessage}
//    newMessageText={state.dialogsPage.newMessageText}
//    dialogs={state.dialogsPage.dialogs}
//    messages={state.dialogsPage.messages}
//    />

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessage: (message) => {
         let action = onMessageChangeActionCreator(message)
         dispatch(action)
      },
      addMessage: () => {
         dispatch(addMessageActionCreator())
       }
    ,
   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;