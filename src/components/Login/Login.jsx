import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {createField, Input} from '../common/FormsControls/FormsControls';
import classes from './Login.module.css';
import forms from './../common/FormsControls/FormControls.module.css';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={forms.loginForm} onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            <div className={forms.checkbox}>
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={forms.formControlSummaryError}>
                {error}
            </div>
            }
            <button>Login</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={classes.loginPage}>
            <div className={classes.loginForm}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);