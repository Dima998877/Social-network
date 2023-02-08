
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app-wrapper'>
          <Header />
          <Navbar store={store} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='*' element={<ProfileContainer />} />
              <Route path='/dialogs/' element={<DialogsContainer />} />
              <Route path='/users/' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  )
};

export default App;
