import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
  return <div className={styles.profile}>
    <ProfileInfo profile={props.profile}/>
    <ProfileStatus  status={'Hello you'} />
    <MyPostsContainer />
  </div>
}

export default Profile;