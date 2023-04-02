import React, { useState } from "react";
import Preloader from '../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import noUserImage from '../../assets/images/user-profile-picture.jpeg'
import ProfileDataForm from '../ProfileData/ProfileDataForm';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

export const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <div className={styles.contacts}><b>{contactTitle}:</b> {contactValue}</div>
    </div>
  )
}
const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={activateEditMode}>Edit</button></div>}
      <div><b>Name: </b>{profile.fullName}</div>
      <div><b>About me: </b>{profile.aboutMe}</div>
      <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })} </div>
      <div><b>Job status: </b>{profile.lookingForAJobDescription}</div></div>

  )
}
const ProfileInfo = ({ profile, isOwner, savePhoto, updateProfileStatus, status, saveProfileData }) => {
  const [editMode, setEditMode] = useState(false)
  
  const onSubmit = (formData) => {
    saveProfileData(formData).then( () => {setEditMode(false)} )
  }
  
  if (!profile) {
    return <Preloader />
  }
    let onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0])
      }
  }
  return (
  <div className={styles.profile_info}>
    <div className={styles.profile_img_container}>
      <img src={profile.photos.large || noUserImage} alt='large_user_icon' className={styles.profile_img} />
      {isOwner && <input className={styles.photo_input} type='file' onChange={onMainPhotoSelected} />}
    </div>

    <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus} />

    {editMode
      ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
      : <ProfileData activateEditMode={ () => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
  </div>
  )
}
export default ProfileInfo; 