import { combineReducers } from 'redux';

// import  todos  from './TodoApp';
// import  visibilityFilter from './visibilityFilter';
import { routerReducer } from 'react-router-redux';

import  mytodos  from '../containers/Todos/todos-reducer';

const todoApp = combineReducers({
 // visibilityFilter,
 // todos,
 mytodos,
 routing: routerReducer
}) ;


export default todoApp;