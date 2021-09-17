import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import classes from './Login.module.css';
import forms from './../common/FormsControls/FormControls.module.css';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginForm} >
      <Field component={Input} validate={[required]} placeholder='Email' name='email' type='text' />
      <Field component={Input} validate={[required]} placeholder='Password' name='password' type='password' />
      <div>
        <Field component={Input} name='rememberMe' type='checkbox' /> 
        <label htmlFor='rememberMe'>Remember me</label>
      </div>
      { props.error && <div className={forms.formControlSummaryError}> 
          {props.error}
         </div>
      } 
      <button>Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if(props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={classes.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);