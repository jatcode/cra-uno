
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCEEDED = 'GET_TODOS_SUCCEEDED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCEEDED = 'CREATE_TODO_SUCCEEDED';
export const CREATE_TODO_FAILED = 'CREATE_TODO_FAILED';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCEEDED = 'DELETE_TODO_SUCCEEDED';
export const DELETE_TODO_FAILED = 'DELETE_TODO_FAILED';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCEEDED = 'UPDATE_TODO_SUCCEEDED';
export const UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED';

export const GET_SINGLE_TODO = 'GET_SINGLE_TODO';
export const GET_SINGLE_TODO_SUCCEEDED = 'GET_SINGLE_TODO_SUCCEEDED';
export const GET_SINGLE_TODO_FAILED = 'GET_SINGLE_TODO_FAILED';

export const LOAD_FORM = 'LOAD_FORM';
export const LOAD_FORM_SUCCEEDED = 'LOAD_FORM_SUCCEEDED';
export const LOAD_FORM_FAILED = 'LOAD_FORM_FAILED';

export function loadFormTodo(idTodo){
  // console.log('en action ceator ',idTodo);
 return {
   type: LOAD_FORM,
   idTodo: idTodo   
 }
}
export function getSingleTodo(idTodo){
  // console.log('en action ceator ',idTodo);
 return {
   type: GET_SINGLE_TODO,
   idTodo: idTodo   
 }
}
export function getAllTodos(){
 return {
   type: GET_TODOS,   
 }
}

// export function createTodo({todo, description}){
export function createTodo({todo, description}){
	
  return {
    type: CREATE_TODO,   
    values: {todo, description}
  }
}

export function deleteTodo(idTodo){
  return {
    type: DELETE_TODO,   
    idTodo: idTodo
  }
}
export function updateTodo(idTodo,todo, description){
  return {
    type: UPDATE_TODO,   
    payload: { idTodo, todo, description}
  }
}
