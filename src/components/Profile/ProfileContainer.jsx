import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserProfile, getProfileStatus, updateProfileStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from '../Common/Preloader/Preloader';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = this.props.authorisedUserId
      }
      this.props.getUserProfile(userId)
      this.props.getProfileStatus(userId)
   }

   render() {
      // if (!this.userId || this.userId === null ) { 
      //    return <Preloader />
      // }
      return <Profile {...this.props}
         profile={this.props.profile}
         status={this.props.status}
         updateProfileStatus={this.props.updateProfileStatus} />
   }
}

let mapStateToProps = (state) => {
   return ({
      profile: state.profilePage.profile,
      status: state.profilePage.profileStatus,
      authorisedUserId: state.auth.userId,
      isAuth: state.auth.isAuth
   })
}
function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}


export default compose(
   connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus }),
   withRouter,
   withAuthRedirect
)(ProfileContainer)