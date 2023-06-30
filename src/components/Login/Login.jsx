import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import styles from "./Login.module.css";

import { login } from "../../redux/auth-reducer";
import { Input } from "../Common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.login_container}>
      <div className={styles.formSummaryError}>{props.error}</div>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
      <div>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>Please enter your login and password</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
