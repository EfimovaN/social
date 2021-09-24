import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import userPhoto from '../../../img/user-icons.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, login}) => {

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
      <div className={classes.avatar}>
          <div className={classes.login}>{login}</div>

        <img src={ profile.photos.large != null ? profile.photos.large : userPhoto } />

        {isOwner &&   <form>
                        <label htmlFor="imageUpload" className={classes.uploadPhoto}>Set profile photo</label>
                        <input type="file" onChange={onMainPhotoSelect}  id="imageUpload" accept="image/*" style={{display:'none'}} />
                      </form>
        }
      </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

      { editMode
        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />
      }

    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (<div className={classes.profileData}>
        <div className={classes.wrapper}>
            <div className={classes.info__edit}>
                <h3>Info</h3>
                {isOwner && <button className={classes.button__profile} onClick={goToEditMode}>Edit</button>}
            </div>
            <div>
                <p>Full name:</p> {profile.fullName}
            </div>
            <div>
                <p>LookingForAJob:</p> {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            { profile.lookingForAJob &&
            <div>
                <p>My professional skills:</p> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <p>About me:</p> {profile.aboutMe}
            </div>
        </div>
      
        <div className={classes.wrapper}>
          <h3>Contacts:</h3> {Object.keys(profile.contacts).map((key) => {
          return <Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
          }) }
        </div>
    </div>
  )
}
const Contacts = ({contactsTitle, contactsValue}) => {

  return (
    <div>
      <p>{contactsTitle}: </p>{contactsValue}
    </div>
  )

}

export default ProfileInfo;