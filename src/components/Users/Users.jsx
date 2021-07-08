import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user-icons.png';

class Users extends React.Component {
  constructor(props){
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
    }


  render() {
    return <div  >
      { 
        this.props.users.map( u => <div key={u.id} className={styles.container}>
            <div className={styles.columnLeft}>
              <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.photo} />
              <div>
                {u.followed 
                  ? <button onClick={ () => {this.props.unFollow(u.id)} }>Follow</button > 
                  : <button onClick={ () => {this.props.follow(u.id)} }>Unfollow</button>}
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
}

export default Users;