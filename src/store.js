import React from 'react';
// eslint-disable-next-line
import { Router, Route, IndexRoute ,browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import App from './components/App';

let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const router =(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      
      
      </Route>
    </Router>
  </Provider>
)