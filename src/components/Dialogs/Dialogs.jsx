import React from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Dialogs.module.css';
import DialogsItem from '../DialogsItem/DialogsItem';
import Message from '../Message/Message';
// import { Textarea } from '../common/FormControls/*FormControls';
// import { maxLengthCreator } from '../../utils/validators/validators';

// const maxLength100 = maxLengthCreator(10);
const AddMessageForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newMessageBody: '',
    },
  });
  const onSubmit = (data) => {
    props.addMessage(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.text_input}>
      <textarea
        placeholder={'Enter your message'}
        className={styles.text_input_area}
        {...register('newMessageBody', {
          required: 'required',
          maxLength: {
            value: 100,
            message: 'max length 10',
          },
        })}
      />
      <p>{errors.newMessageBody?.message}</p>
      <button className={styles.text_input_button}>Send</button>
    </form>
  );
};

const Dialogs = (props) => {
  const dialogsElement = props.dialogs.map((d) => (
    <DialogsItem key={d.id} name={d.name} id={d.id} />
  ));

  const messagesElement = props.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  const addMessage = (data) => {
    props.addMessage(data.newMessageBody);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={styles.dialogs}>
      <h3>Dialogs</h3>
      <div className={styles.dialogs_items}>
        <div className={styles.contact_list}>{dialogsElement}</div>
        <div className={styles.messages}>{messagesElement}</div>
      </div>
      <AddMessageForm addMessage={addMessage} />
    </div>
  );
};

export default Dialogs;
