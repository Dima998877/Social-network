import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
        <App
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          store={store} />
    </React.StrictMode>
  );
}
renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state)
});


// reportWebVitals();
