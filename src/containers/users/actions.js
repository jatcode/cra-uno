import * as type from './constants'

export function loadAllusers(){
	return {type: type.GET_USERS}
}

export function loadracis(){
	return {type: 'GET_RACIS'}
}
export function createUser(...formValues){
	//need to see what are the values that the form is returning
	// console.log('enActions,', ...formValues);
  return {
    type: type.CREATE_USER,   
    payload: formValues
  }
}
