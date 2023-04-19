import React from 'react';

import Friendsbar from './FriendsBar';

const FriendsbarContainer = (props) => {
  const state = props.store.getState();
  return <Friendsbar friendsData={state.friendsBar.friendsData} />;
};

export default FriendsbarContainer;
