import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";


const Header = (props) => {
  return<header className={styles.header}>
    <div className={styles.login}>
      { props.isAuth 
      ? <div>{props.login} <button onClick={props.logout}>Logout</button> </div> 
      : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>;
}
export default Header;