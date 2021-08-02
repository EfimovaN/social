import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/users-selectors';



class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => { 
    this.props.requestUsers(pageNumber, this.props.pageSize);

    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(pageNumber);

    // usersAPI.requestUsers(pageNumber, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    // });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
                    /> 
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },

//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId));
//     },

//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },

//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },

//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },

//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }

//   }
// }

export default compose(
  connect(mapStateToProps, {follow,unfollow, setCurrentPage,
    toggleFollowingProgress, requestUsers
  })
)(UsersContainer);