import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import  mytodos  from './todos-reducer';
import  currTodo  from './currTodo';
import  formLoader  from './formReducer';

const todoApp = combineReducers({
 mytodos,
 currTodo,
 form: formReducer, 
 formLoader,
 routing: routerReducer
}) ;


export default todoApp;