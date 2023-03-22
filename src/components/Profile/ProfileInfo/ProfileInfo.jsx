import React from "react";
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import wallpaper from '../../../assets/images/wallpaper.png'
import noUserImage from '../../../assets/images/user-profile-picture.jpeg'

const ProfileInfo = ({ profile, isOwner, savePhoto }) => {

  if (!profile) {
    return <Preloader />
  }
  let onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return <div className={styles.profile_info}>
    <div className={styles.wallpaper_wrapper}>
      <img src={wallpaper} className={styles.wallpaper} alt='wallpaper' />
    </div>
    <div className={styles.profile_img_container}>
      <img src={profile.photos.large || noUserImage} alt='large_user_icon' className={styles.profile_img} />
      {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
    </div>

  </div>
}

export default ProfileInfo;