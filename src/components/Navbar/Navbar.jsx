import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import FriendsbarContainer from '../Friendsbar/FriendsBarConainer';

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <img
        src='https://www.svgrepo.com/show/426053/git.svg'
        className={styles.logo}
        alt='logo'
      />
      <div className={styles.nav_links}>
        <div className={styles.nav_link}>
          <NavLink
            to='/profile'
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Profile
          </NavLink>
        </div>
        <div className={styles.nav_link}>
          <NavLink
            to='/users'
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Users
          </NavLink>
        </div>
        <div className={styles.nav_link}>
          <NavLink
            to='/dialogs'
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Messages
          </NavLink>
        </div>
        <div className={styles.nav_link}>
          <NavLink
            to='/news'
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            News
          </NavLink>
        </div>
        <div className={styles.nav_link}>
          <NavLink
            to='/music'
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Music
          </NavLink>
        </div>
        <div className={styles.nav_link}>
          <NavLink
            to='/settings'
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
      <FriendsbarContainer store={props.store} />
    </nav>
  );
};

export default Navbar;
