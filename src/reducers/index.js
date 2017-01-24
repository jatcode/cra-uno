import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import  mytodos  from '../containers/Todos/todos-reducer';

const todoApp = combineReducers({
 mytodos,
 routing: routerReducer
}) ;


export default todoApp;