import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// import  mytodos  from './todos-reducer';
// import  currTodo  from './currTodo';
import  formLoader  from './formReducer';
import  userReducer from '../containers/users/reducer'
const todoApp = combineReducers({
 // mytodos,
 // currTodo,
 users: userReducer,
 form: formReducer, 
 formLoader,
 routing: routerReducer
}) ;


export default todoApp;