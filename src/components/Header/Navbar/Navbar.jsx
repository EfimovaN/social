import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <ul className={classes.nav}>
            <li>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </li>
            <li>
                <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
            </li>
            <li>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;