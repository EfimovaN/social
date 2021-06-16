import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  debugger
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;