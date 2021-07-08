import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user-icons.png';

let Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items);
      });
  
      // props.setUsers([
      //   {id: 1, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1641332/pub_5d0764b7e75e750e0c9f8c86_5d076537789be40d64bb3e55/scale_1200', followed: false, fullName: 'Dmitry K.', status: 'I am looking for a Job right now', location: {country: 'Belarus', city: 'Minsk'}},
      //   {id: 2, photoUrl: 'https://sun9-67.userapi.com/c851420/v851420113/17b609/2xTFgEyYQcM.jpg', followed: true, fullName: 'Maria T.', status: 'I am ', location: {country: 'Russia', city: 'Moscow'}},
      //   {id: 3, photoUrl: 'https://proprikol.ru/wp-content/uploads/2019/07/prikolnye-kartinki-na-avu-21.jpg', followed: false, fullName: 'Tom S.', status: 'I am busy', location: {country: 'USA', city: 'Toronto'}}
      //   ]
      // );
    }
  }


  return <div  >
      <button onClick={getUsers}>Get users</button>
      { 
        props.users.map( u => <div key={u.id} className={styles.container}>
            <div className={styles.columnLeft}>
              <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.photo} />
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