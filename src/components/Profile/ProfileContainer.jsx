import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUsersProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    
    profileAPI.getUsersProfile(userId).then(data => {
        this.props.setUsersProfile(data);
    });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);


