import { connect } from 'react-redux';
import { compose } from 'redux';

import type { MessageInitialStateType } from '../../redux/dialogs-reducer';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state: any): MessageInitialStateType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(Dialogs);
