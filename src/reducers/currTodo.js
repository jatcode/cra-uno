function currTodo(state = {}, action) {
  switch (action.type) {
    case "GET_SINGLE_TODO_SUCCEEDED":
      return action.singleTodoItem.length ? action.singleTodoItem[0] : {};
    default:
      return state;
  }
}
export default currTodo;