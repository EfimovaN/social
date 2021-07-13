import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import classes from './Header.module.css'

const Header = (props) => {
  return (
      <header className={classes.header}>
        <p className={classes.logo}>SOCIAL</p>
       
       <Navbar />
        
        <div className={classes.loginBlock}>
          { props.isAuth ? props.login 
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  );
}

export default Header;