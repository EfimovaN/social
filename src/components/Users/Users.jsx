import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../img/user-icons.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={styles.paginationList}>
      {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
        onClick = {(e) => props.onPageChanged(p)} >{p}</span>
      })}
    </div>
    {props.users.map( u => <div key={u.id} className={styles.container}>
          <div className={styles.columnLeft}>
            <NavLink to={'/profile' + u.id}>
              <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.photo} />
            </NavLink>
            <div>
              {u.followed 
                ? <button onClick={ () => {props.unFollow(u.id)} }>Follow</button > 
                : <button onClick={ () => {props.follow(u.id)} }>Unfollow</button>}
            </div>
          </div>

          <div className={styles.columnRight}>
            <div className={styles.row}>
              <h3>{u.name}</h3>
              <p>{u.status}</p>
            </div>
            <div className={styles.row}>
              <p>{'u.location.country'}</p>
              <p>{'u.location.city'}</p>
            </div>
          </div>
      </div>)
    }
  </div>
}


export default Users;