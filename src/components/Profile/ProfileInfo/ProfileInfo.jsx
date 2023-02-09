import React from "react";
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import { version } from 'react';
import wallpaper from '../../../assets/images/wallpaper.png'
console.log(version);

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return <div className={styles.profile_info}>
    <div className={styles.wallpaper_wrapper}>
      <img src={wallpaper} className={styles.wallpaper} alt='wallpaper' />
      </div>
    <div className={styles.profile_img_container}>
      <img src={props.profile.photos.large} alt='large_user_icon' className={styles.profile_img}/>
      icon+discrip</div>
  </div>
}

export default ProfileInfo;