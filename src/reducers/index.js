import { combineReducers } from 'redux';

import  todos  from './TodoApp';
import  visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
 visibilityFilter,
 todos
}) ;


export default todoApp;