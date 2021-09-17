import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../../common/FormsControls/FormsControls';
import classes from './ProfileInfo.module.css'


const ProfileDataForm = ({profile}) => {
  return (<form className={classes.wrapper}>
      <div><button onClick={() => {}}>Save</button></div>
      <div>
        <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>LookingForAJob:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
      </div>
      { profile.lookingForAJob &&
      <div>
        <b>My professional skills:</b> {profile.lookingForAJobDescription}
      </div>
      }
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      {/* <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
        return <Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
        }) }
      </div> */}
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataForm;