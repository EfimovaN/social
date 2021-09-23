import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import classes from './ProfileInfo.module.css';
import forms from '../../common/FormsControls/FormControls.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (<form onSubmit={handleSubmit} className={classes.wrapper}>
      <div><button className={classes.save__profile}>Save</button></div>
      {error && <div className={forms.formControlSummaryError}>
          {error}
      </div>
      }
      <div>
        <p>Full name:</p> {createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <p>Looking for a job:</p> { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
      </div>
      <div>
        <p>My professional skills:</p> { createField("My professional skills", "lookingForAJobDescription", [], Textarea )}
      </div>
      <div>
        <p>About me:</p> { createField("About me", "aboutMe", [], Textarea )}
      </div>
      <div>
        <h3>Contacts:</h3> {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={classes.contact}>
        <p>{key}:</p> {createField(key, "contacts." + key, [], Input)}
        </div>
        })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;