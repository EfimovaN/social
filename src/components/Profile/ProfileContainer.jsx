import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUsersProfile } from '../../redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
      .then(response => {
        this.props.setUsersProfile(response.data);
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


