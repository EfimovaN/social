import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Messages.module.css';


const DialogItem = (props) => {
  return (
    <div className={classes.dialogItem + ' ' + classes.active}>
      <img src={props.img} alt="Avatar" />
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;