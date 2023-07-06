import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';
import {
  getUserProfile,
  getProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfileData,
} from '../../redux/profile/reducer';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getProfileStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateProfileStatus={this.props.updateProfileStatus}
            isOwner={!this.props.router.params.userId}
            savePhoto={this.props.savePhoto}
            saveProfileData={this.props.saveProfileData}
          />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.profileStatus,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching,
  };
};
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getProfileStatus,
    updateProfileStatus,
    savePhoto,
    saveProfileData,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
