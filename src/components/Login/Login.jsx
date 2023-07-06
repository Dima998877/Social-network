import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './Login.module.css';

import { login } from '../../redux/auth/reducer';

const LoginForm = (props) => {
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
    props.onSubmit(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.login_container}
      >
        {/* <div className={styles.formSummaryError}>{errors.email?.message}</div> */}
        <input
          {...register('email', { required: true })}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && (
          <p className={styles.formSummaryError} role='alert'>
            Email is required
          </p>
        )}
        <input
          type='password'
          {...register('password', { required: true })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password?.type === 'required' && (
          <p className={styles.formSummaryError} role='alert'>
            Password is required
          </p>
        )}

        <input type='checkbox' {...register('rememberMe')} />
        {props.captchaUrl && <img src={props.captchaUrl} alt='captcha img' />}
        {props.captchaUrl && (
          <input {...register('captcha', { required: 'required' })} />
        )}
        <div>
          <button>Login</button>
        </div>
      </form>
      <div>
        <li> Email: free@samuraijs.com</li>
        <li>Password: free</li>
      </div>
    </>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div>
      <h1>Please enter your login and password</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { login })(Login);
