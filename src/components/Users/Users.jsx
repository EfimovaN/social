import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../img/user-icons.png';
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (<div className={classes.userContainer}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>

            <div className={classes.userList}>
                {users.map(u => <div key={u.id} className={classes.userItem}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo}/>
                    </NavLink>

                    <div className={classes.userInfo}>
                        <h3>{u.name}</h3>
                        <p>{u.status}</p>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id);
                                      }}>
                                Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id);
                                      }}>
                                Follow</button>}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Users;