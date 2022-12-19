
import './App.css';
import wallpaper from './wallpaper.jpg'
import Header from './components/Header';


function App() {
  return (
    <div className='App'>
      <Header />
      <nav className='App-nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>

      </nav>
      <div className='App-content'>
        <img src={wallpaper} className='App-wallpaper' alt='wallpaper' />
        <div>icon+discrip</div>
        <div>
          <div>My post</div>
          <div>New post</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
