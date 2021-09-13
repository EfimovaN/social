import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../img/user-icons.png';
import { NavLink } from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  return (<div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />

        {users.map( u => <div key={u.id} className={classes.container}>
          <div className={classes.columnLeft}>
            <NavLink to={'/profile/' + u.id}>
              <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.photo} />
            </NavLink>
            <div>
              {u.followed 
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                    onClick={() => {props.unfollow(u.id);}} >
                    Unfollow</button > 

                : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                    onClick={() => {props.follow(u.id);}}>
                    Follow</button>}
            </div>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.row}>
              <h3>{u.name}</h3>
              <p>{u.status}</p>
            </div>
            <div className={classes.row}>
              <p>{'u.location.country'}</p>
              <p>{'u.location.city'}</p>
            </div>
          </div>
      </div>)
    }
  </div>
  )}


export default Users;