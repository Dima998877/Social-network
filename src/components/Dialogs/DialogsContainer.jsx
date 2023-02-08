import { connect } from "react-redux";
import { addMessage, updateNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText
   }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessage, addMessage,})(Dialogs)
export default DialogsContainer;