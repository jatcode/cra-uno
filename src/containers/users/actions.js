import * as type from './constants'

export function loadAllusers(){
	return {type: type.GET_USERS}
}

export function createUser({todo, description}){
	//need to see what are the values that the form is returning
  return {
    type: type.CREATE_USER,   
    values: {todo, description}
  }
}
