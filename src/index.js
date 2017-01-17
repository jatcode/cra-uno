import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { router } from './store'
import './index.css';




ReactDOM.render(
  router,
  document.getElementById('root')
);
