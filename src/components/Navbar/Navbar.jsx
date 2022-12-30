import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return <nav className={s.nav}>
    <img src='https://www.svgrepo.com/show/426053/git.svg' className={s.logo} alt='logo' />
    <div className={s.nav_links}>
      <div className={s.nav_link}><NavLink to='/profiles' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></div>
      <div className={s.nav_link}><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink></div>
      <div className={s.nav_link}><NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink></div>
      <div className={s.nav_link}><NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink></div>
      <div className={s.nav_link}><NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink></div>
    </div>
  </nav>;
}

export default Navbar; 