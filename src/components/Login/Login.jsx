import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import classes from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginForm} >
      <Field component={Input} validate={[required]} placeholder='Login' name='login'   type='text' />
      <Field component={Input} validate={[required]} placeholder='Password' name='password' type='password' />
      <div>
        <Field component={Input} name='rememberMe' type='checkbox' /> 
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