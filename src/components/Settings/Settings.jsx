import React from "react";
import s from './Settings.module.css';

const Settings = () => {
  return <div className={s.settings}>
    <img src='https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000' className={s.wallpaper} alt='wallpaper' />
    <div>icon+discrip</div>
  </div>
}

export default Settings;