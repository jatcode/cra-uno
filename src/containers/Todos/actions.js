
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCEEDED = 'GET_TODOS_SUCCEEDED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCEEDED = 'CREATE_TODO_SUCCEEDED';
export const CREATE_TODO_FAILED = 'CREATE_TODO_FAILED';

export function getAllTodos(){
 return {
   type: GET_TODOS,   
 }
}

export function createTodo(name, description){
  return {
    type: CREATE_TODO,   
    payload: {name, description}
  }
}
