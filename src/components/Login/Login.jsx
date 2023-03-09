import React from 'react'
import style from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => { 
   return (
   <form onSubmit={props.handleSubmit}className={style.login_container}>
      <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
      <div><Field placeholder={'Password'} name={'password'}component={'input'}/></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me</div>
      <div><button>Login</button></div>
   </form>
   )
}


const LoginReduxForm = reduxForm({
   form: 'login'
 })(LoginForm)


const Login = (props) => { 
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return <div>
      <h1>Please enter your login and passwo</h1>
   <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}
export default Login