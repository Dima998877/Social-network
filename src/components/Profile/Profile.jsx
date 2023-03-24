import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const Profile = (props) => {
  return <div className={styles.profile}>
    <ProfileInfo {...props}/>
    <MyPostsContainer />
  </div>
}

export default Profile;