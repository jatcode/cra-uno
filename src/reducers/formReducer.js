// const LOAD = 'redux-form-examples/account/LOAD'

const formLoader = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_FORM_SUCCEEDED':
			console.log(action.singleTodoItem[0]);
			return  action.singleTodoItem.length ? action.singleTodoItem[0] : {};
 
			// data: action.singleTodoItem.length ? action.singleTodoItem[0] : {};
      // }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
// export const load = data => ({ type: LOAD, data })

export default formLoader