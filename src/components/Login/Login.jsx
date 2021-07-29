import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginForm} >
      <Field placeholder='Login' name='login' component='input' type='text' />
      <Field placeholder='Password' name='password' component="input" type='password' />
      <div>
        <Field component='input' name='rememberMe' type='checkbox' /> 
        <label htmlFor='rememberMe'>Remember me</label>
      </div>
      <button>Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={classes.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;