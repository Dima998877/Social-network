import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from './render'
import state from './redux/state'

renderEntireTree(state);


reportWebVitals();
