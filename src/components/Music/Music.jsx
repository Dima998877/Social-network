import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Music.module.css';

export function Input() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          placeholder="First name"
          {...register('firstName', { required: 'required field' })}
        />
        <p>{errors.firstName?.message}</p>
        <input
          placeholder="Last name"
          {...register('lastName', {
            required: 'required field',
            minLength: {
              value: 4,
              message: 'Minimal length is 4',
            },
          })}
        />
        <p>{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export const Textarea = (props) => {
  return (
    <div>
      <textarea />
    </div>
  );
};

const Music = () => {
  return (
    <div className={styles.music}>
      {/* <img
        src="https://img.freepik.com/free-vector/musical-melody-symbols-bright-blue-splotch_1308-70426.jpg?w=2000"
        className={styles.wallpaper}
        alt="wallpaper"
      /> */}
      <div>discrip</div>
      <Input />
    </div>
  );
};

export default Music;
