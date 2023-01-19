import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './App';
// import { addPost, updateNewPostText, subscribe, store } from './redux/state';
import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
root.render(

  <React.StrictMode>
    <App 
    state={state} 
    dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>
);
}
store.subscribe(renderEntireTree);
renderEntireTree(store.getState());


// reportWebVitals();
