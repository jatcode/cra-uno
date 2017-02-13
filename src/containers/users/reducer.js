// import { fromJS } from 'immutable';
import  * as type  from './constants';

function userReducer(state=[], action){
	switch(action.type){
		case type.GET_USERS_SUCCEEDED:
			return action.result;
		case type.CREATE_USER_SUCCEEDED:
			// console.log('ACTION en reducer USER,',action);
			return {...state, otro:action.result};
		default:
			return state;
	}
}

export default userReducer;

// function userReducer(state=initialState, action){
// 	switch(action.type){
// 		case GET_USER_SUCCEEDED:
// 			console.log(action);
// 			return state.set('users': action.result);
// 			// return action.result
// 		default:
// 			return state;
// 	}
// }