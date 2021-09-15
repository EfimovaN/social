import React from 'react';
import classes from './ProfileInfo.module.css'
import background from './../../../img/city.jpg'
import Preloader from '../../common/preloader/preloader';
import userPhoto from '../../../img/user-icons.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={classes.profileInfo}>
      <img src={background} alt='forest' width='1920' height='250'/>
      <div className={classes.avatar}>
        <img src={ props.profile.photos.large != null ? props.profile.photos.large : userPhoto } width='150' height='150'/>
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      <div className={classes.wrapper}>
        <h2>{props.profile.fullName}</h2>
        <p>About me: {props.profile.aboutMe}</p>
        <p>LookingForAJob: {props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
        <p>Description: {props.profile.lookingForAJobDescription}</p>
      </div>
      <div className={classes.wrapper}>
        <h2>Contacts</h2>
        <p>facebook:  {props.profile.contacts.facebook}</p>
        <p>website:  {props.profile.contacts.website}</p>
        <p>vk:  {props.profile.contacts.vk}</p>
        <p>twitter:  {props.profile.contacts.twitter}</p>
        <p>instagram:  {props.profile.contacts.instagram}</p>
        <p>youtube:  {props.profile.contacts.youtube}</p>
        <p>github:  {props.profile.contacts.github}</p>
        <p>mainLink:  {props.profile.contacts.mainLink}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;