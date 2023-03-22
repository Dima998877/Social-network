import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const Profile = ({profile, status, isOwner, updateProfileStatus, savePhoto}) => {
  return <div className={styles.profile}>
    <ProfileInfo profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
    <ProfileStatusWithHooks  status={status} updateProfileStatus={updateProfileStatus}/>
    <MyPostsContainer />
  </div>
}

export default Profile;