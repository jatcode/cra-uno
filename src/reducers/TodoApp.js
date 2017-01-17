import * as actions from '../actions'
// import { combineReducers } from 'redux';
// const { SHOW_ALL} = actions.VisibilityFilters;


function todo (state = {}, action){
  switch(action.type){
    case actions.ADD_TODO:
      console.log('ACTION :',action);
      return {
        id:action.id,
        text:action.text,
        description: action.description,
        completed: false
      }
    case actions.TOGGLE_TODO:
      if(state.id !== action.id){
        return state
      }
      return(
        Object.assign({},state,{
          completed:!state.completed
        })
      )
    default:
      return state;
  }
}

function todos(state = [], action ){
  switch(action.type){
    case actions.ADD_TODO:
      return [ ...state,
        todo(undefined, action )
      ]
    case actions.TOGGLE_TODO:
      return state.map(utodo=> todo(utodo,action) )
      
    default:
    return state;
  }
}


export default todos;
