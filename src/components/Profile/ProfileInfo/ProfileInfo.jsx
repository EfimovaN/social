import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'
import background from './../../../img/city.jpg'
import Preloader from '../../common/preloader/preloader';
import userPhoto from '../../../img/user-icons.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }
  
  const onMainPhotoSelect = (e) => {
    if (e.target.files.length) {
        savePhoto( e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
        () => {
            setEditMode(false);
        }
    );
}

  return (
    <div className={classes.profileInfo}>
      <img src={background} alt='forest' width='1920' height='250'/>
      <div className={classes.avatar}>
        <img src={ profile.photos.large != null ? profile.photos.large : userPhoto } />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelect} />}
      </div>

      { editMode
        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />
      }

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div className={classes.wrapper}>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
      <div>
        <b>Full name:</b> {profile.fullName}
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
      
      <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
        return <Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
        }) }
      </div>
    </div>
  )
}
const Contacts = ({contactsTitle, contactsValue}) => {
  return (
    <div className={classes.contacts}>
      <b>{contactsTitle}: </b>{contactsValue}
    </div>
  )

}

export default ProfileInfo;