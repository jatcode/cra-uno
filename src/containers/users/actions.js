import * as type from './constants'

export function loadAllusers(){
	console.log('entrando...')
	return(
		{type: type.GET_USERS}
	);
}