import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user-icons.png';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => { 
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
    });

  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div  >
      <div>
        {pages.map(p => {
          return <span className={this.props.currentPage === p && styles.selectedPage}
          onClick = {(e) => this.onPageChanged(p)} >{p}</span>
        })}
      </div>

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