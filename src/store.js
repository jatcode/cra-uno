import React from 'react';
// eslint-disable-next-line
import { Router, Route, IndexRoute ,browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'
import App from './components/App';
import mainSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(sagaMiddleware);

// let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let store = createStore(
  rootReducer
  // ,initialStateForStore
  ,compose(
    storeEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// sagaMiddleware.run(helloSaga);
sagaMiddleware.run(mainSaga);

export const router =(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      
      
      </Route>
    </Router>
  </Provider>
)