import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import Gallery from "./Gallery/Gallery";

const Profile = (props) => {
    return (
        <div className={classes.profileContainer}>
            <div className={classes.profile}>
                <ProfileInfo savePhoto={props.savePhoto}
                             login={props.login}
                             isOwner={props.isOwner}
                             profile={props.profile}
                             status={props.status}
                             saveProfile={props.saveProfile}
                             updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
                <Gallery/>
            </div>
        </div>
    );
}

export default Profile;