import { connect } from "react-redux";
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { addMessage, updateNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
   }
}
c

const DialogsContainer = connect(mapStateToProps, {updateNewMessage, addMessage,})(AuthRedirectComponent)
export default DialogsContainer;