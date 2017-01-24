import { call, put, takeEvery, takeLatest/*,select, take*/, fork } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { 
	apiGetAllTodos, apiCreateTodo, apiUpdateTodo, 
	apiDeleteTodo, apiGetSingleTodo } from '../services/TodosApi';


//GET_TODOS
function* getTodos(feathersApp){
  try {
    const data = yield call(apiGetAllTodos,feathersApp)
    yield put({type:"GET_TODOS_SUCCEEDED",data});
  } catch (error) {
    console.log('this is the error ',error);
     yield put({type:'GET_TODOS_FAILED',error})
  } 
}
function* getTodosSaga(feathersApp,action){
  yield takeEvery('GET_TODOS',getTodos,feathersApp);
}
//CREATE_TODO
function* createTodo(feathersApp,action){
  const { values:{todo, description} } = action
  try {
    const resp = yield call(apiCreateTodo,feathersApp, todo, description)
    // console.log('this is the resp ',resp);
    yield put({type:"CREATE_TODO_SUCCEEDED",resp});
		yield browserHistory.push(`/`);
		yield put({type:"GET_TODOS"});
  } catch (error) {
    console.log('this is the error ',error);
     yield put({type:'CREATE_TODO_FAILED',error})
  } 
}
function* createTodoSaga(feathersApp){
  yield takeLatest('CREATE_TODO',createTodo,feathersApp);
}
//UPDATE_TODO
function* updateTodo(feathersApp,action){
  const { payload:{idTodo, todo, description} } = action
  try {
    const {code, ...data } = yield call(apiUpdateTodo,feathersApp, idTodo,todo, description)
		if(code){
			// console.log('codigo,,, ',code);
			var {response:{error, statusText}} = data;
			console.log('response: ',data);
			console.log('statusTEXT: ',statusText);
			console.log('response.ERROR.NAME: ',error.name);
			console.log('response.ERROR.MESSAGE: ',error.message);
		}else{
			// console.log('this is the resp ',data);
			yield put({type:"UPDATE_TODO_SUCCEEDED",data});
			yield browserHistory.push(`/`);
			yield put({type:"GET_TODOS"});
		}
  } catch (error) {
    console.log('Something else happened on update ',error);
     yield put({type:'UPDATE_TODO_FAILED',error})
  } 
}
function* updateTodoSaga(feathersApp){
  yield takeLatest('UPDATE_TODO',updateTodo,feathersApp);
}
//DELETE_TODO
function* deleteTodo(feathersApp,{idTodo}){
  try {
		const {code, ...data } = yield call(apiDeleteTodo,feathersApp, idTodo)
		if(code){
			// console.log('codigo,,, ',code);
			var {response:{error, statusText}} = data;
			console.log('response: ',data);
			console.log('statusTEXT: ',statusText);
			console.log('response.ERROR.NAME: ',error.name);
			console.log('response.ERROR.MESSAGE: ',error.message);
			yield put({type:'DELETE_TODO_FAILED',error}) 
		} else{
			console.log('data: ',data);
			yield put({type:"DELETE_TODO_SUCCEEDED",data});
			yield browserHistory.push(`/`);
			yield put({type:"GET_TODOS"});
		}
  } catch (error) {
    console.log('something else happened on delete: ',error);
     yield put({type:'DELETE_TODO_FAILED',error})
  } 
}
function* deleteTodoSaga(feathersApp){
  yield takeLatest('DELETE_TODO',deleteTodo,feathersApp);
}
function* callGetSingleTodo(feathersApp, {idTodo}) {
  const singleTodoItem = yield call(apiGetSingleTodo, feathersApp, idTodo);
  yield put({type: "GET_SINGLE_TODO_SUCCEEDED", singleTodoItem});
}

function* getSingleTodoSaga(feathersApp) {
  yield takeEvery("GET_SINGLE_TODO", callGetSingleTodo, feathersApp);
}
function* callLoadForm(feathersApp, {idTodo}) {
  const singleTodoItem = yield call(apiGetSingleTodo, feathersApp, idTodo);
  yield put({type: "LOAD_FORM_SUCCEEDED", singleTodoItem});
}
function* loadFormSaga(feathersApp) {
	yield takeEvery("LOAD_FORM", callLoadForm, feathersApp);
}

export default function* rootSaga(feathersApp){
  yield[
      fork(getTodosSaga, feathersApp),
      fork(getSingleTodoSaga, feathersApp),
      fork(loadFormSaga, feathersApp),
			fork(deleteTodoSaga, feathersApp),
      fork(createTodoSaga, feathersApp),
      fork(updateTodoSaga, feathersApp),
  ]
}

/**
 * call also supports invoking object methods, 
 * you can provide a this context to the invoked functions using the following form:

yield call([obj, obj.method], arg1, arg2, ...) // as if we did obj.method(arg1, arg2 ...)

apply is an alias for the method invocation form

yield apply(obj, obj.method, [arg1, arg2, ...])
call and apply are well suited for functions that return Promise results.

DEALING  WITH ERRORS WE CAN DO IT IN THE APICALLFUNTION
../somewhereAPI.js
function fetchProductsApi() {
  return Api.fetch('/products')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
./sagas/index.js

function* fetchProducts() {
  const { response, error } = yield call(fetchProductsApi)
  if (response)
    yield put({ type: 'PRODUCTS_RECEIVED', products: response })
  else
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
}

 * *
 */