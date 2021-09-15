import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import classes from './Header.module.css'

const Header = (props) => {
  return (
      <header className={classes.header}>
          <div className={classes.container}>
              <p className={classes.logo}>SOCIAL</p>
              <Navbar />
              <div className={classes.loginBlock}>
                  { props.isAuth
                      ? <div>{props.login} <button onClick={props.logout}>Logout</button> </div>
                      : <NavLink to={'/login'}>Login</NavLink>}
              </div>
          </div>
      </header>
  );
}

export default Header;