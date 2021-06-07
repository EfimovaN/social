import React from 'react';
import classes from './ProfileInfo.module.css'
import background from './../../../img/city.jpg'
import ava from './../../../img/avatar-girl.jpg'

const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <img src={background} alt='forest' width='1440' height='250'/> 
      <div className={classes.avatar}>
        <img src={ava} alt='avatar' width='100' height='100'/>
      </div>
      <div className={classes.wrapper}>
        <h2>Elena L.</h2>
        <p>Date of Birth: 10 april</p>
        <p>City: Moscow</p>
        <p>Education: MGU'10</p>
      </div>
    </div>
  );
}

export default ProfileInfo;