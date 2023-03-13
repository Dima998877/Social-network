import React from "react";
import { Navigate } from 'react-router-dom';
import styles from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../Common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.text_input}>
         <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'}
         className={styles.text_input_area} validate={[required, maxLength100]} />
         <button className={styles.text_input_button}>Send</button>
      </form>
   )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogsMessageForm'})(AddMessageForm)

const Dialogs = (props) => {

   let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

   let messagesElement = props.messages.map(m => <Message message={m.message} id={m.id} />)

   let addMessage = (values) => { props.addMessage(values.newMessageBody)}

   if (!props.isAuth) return <Navigate to='/login' />

   return (
      <div className={styles.dialogs}>
         <h3>Dialogs</h3>
         <div className={styles.dialogs_items}>
            <div className={styles.contact_list}>
               {dialogsElement}
            </div>
            <div className={styles.messages}>
               {messagesElement}
            </div>
         </div>
        <AddMessageReduxForm onSubmit={addMessage} />
      </div>
   )
}

export default Dialogs;