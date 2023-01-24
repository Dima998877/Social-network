import React from "react";
// import props from 'prop-types';
import Friendsbar from "./FriendsBar";

const FriendsbarContainer = (props) => {

let state = props.store.getState()
return <Friendsbar friendsData={state.friendsBar.friendsData}/>
  
}

export default FriendsbarContainer; 