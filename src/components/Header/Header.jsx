import React from "react";
import s from "./Header.module.css";

const Header = () => {
   return  <header className={s.header}>
   <img src='https://www.svgrepo.com/show/426053/git.svg' className={s.logo} alt='logo' />
 </header>;
}

export default Header;