import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './bootstrap/css/bootstrap.min.css'
import { Todo } from './Todo';


ReactDOM.render(
  <React.StrictMode>
    <Todo />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
