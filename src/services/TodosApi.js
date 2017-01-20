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

export function apiDeleteTodo(feathersApp,idTodo){
  const todoService = feathersApp.service('todos');
  return todoService.remove(idTodo)
    .then((value) => {
      console.log('data en DELETE API',value);
      return value;
    })
    .catch((err) => {
      console.log('error en DELETE api',err);
      return err;
    })
}  
export function apiUpdateTodo(feathersApp,idTodo,...params){
  const todoService = feathersApp.service('todos');
  return todoService.update({idTodo, params})
    .then((value) => {
      console.log('data en UPDATE API',value);
      return value;
    })
    .catch((err) => {
      console.log('error en UPDATE api',err);
      return err;
    })
}  
