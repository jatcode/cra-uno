export function apiGetAllTodos(feathersApp){  
  const todos = feathersApp.service('todos');
  return todos
    .find({})
    .then((value) => {
    	// console.log('data en API',value.data);
    	return value.data;
    })
    .catch((err) => {
    	// console.log('error en api',err);
    	return err.data;
    })
}

export function apiCreateTodo(feathersApp,todo, description){
  const todos = feathersApp.service('todos');
  return todos.create({todo,description})
    .then((value) => {
      // console.log('data en API',value);
      return value;
    })
    .catch((err) => {
      console.log('error en api',err);
      return err;
    })
}  
