import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

class ProfileContainer  extends React.Component {
  render(){
   return  <Profile {...this.props} />
 }
}
 export default ProfileContainer;