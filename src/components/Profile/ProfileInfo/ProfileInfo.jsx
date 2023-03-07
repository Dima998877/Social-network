import React from "react";
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import wallpaper from '../../../assets/images/wallpaper.png'
import noUserImage from '../../../assets/images/user-profile-picture.jpeg'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div className={styles.profile_info}>
    <div className={styles.wallpaper_wrapper}>
      <img src={wallpaper} className={styles.wallpaper} alt='wallpaper' />
    </div>
    <div className={styles.profile_img_container}>
      <img src={props.profile.photos.large || noUserImage}  alt='large_user_icon' className={styles.profile_img} />
    </div>
    
  </div>
}

export default ProfileInfo;