import React from 'react'
import styles from './Login.module.css'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { createField, Input } from '../common/FormControls/FormControls'
import {required } from '../../utils/validators/validators'

const LoginForm = (props) => { 
   return (
   <form onSubmit={props.handleSubmit}className={styles.login_container}>
      <div className={styles.formSummaryError}>{props.error}</div>
      {createField('Email', 'email', Input, [required])}
      {createField('Password', 'password', Input, [required], {type:'password'})}
      {createField(null, 'rememberMe', Input, null, {type:'checkbox'},'Remember me')}
      {props.captchaUrl && <img src={props.captchaUrl} alt='captcha img' />}
      {props.captchaUrl && createField('Enter numbers', 'captcha', Input, [required])}
      <div><button>Login</button></div>
   </form>
   )
}


const LoginReduxForm = reduxForm({
   form: 'login'
 })(LoginForm)


const Login = (props) => { 
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }
   if (props.isAuth) { 
   return <Navigate to={'/profile'}/>
}
   return <div>
      <h1>Please enter your login and password</h1>
   <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login)