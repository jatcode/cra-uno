function mytodos(state=[],action){
  switch (action.type) {
    case "GET_TODOS_SUCCEEDED":
      return action.data;
    case "CREATE_TODO_SUCCEEDED":
      // console.log('action on CREATE TODO',action);
      return state;
    default:
      return state
  }
}

export default mytodos;