
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import store from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { initialiseApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initialiseApp()
 }
 render(){
  if (!this.props.initialised) {
  return <Preloader />
}
  return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar store={store} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/dialogs/' element={<DialogsContainer />} />
              <Route path='/users/' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
     
  )}
};

const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})
export default connect(mapStateToProps, { initialiseApp })(App)