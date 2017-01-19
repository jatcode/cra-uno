/* eslint-disable */
import { call, put, takeEvery, takeLatest,select, take, fork } from 'redux-saga/effects';

import { apiGetAllTodos, apiCreateTodo } from '../services/TodosApi';



//GET_TODOS
function* getTodos(feathersApp){
  try {
    const data = yield call(apiGetAllTodos,feathersApp)
    console.log('this is the data ',data);
    yield put({type:"GET_TODOS_SUCCEEDED",data});
  } catch (error) {
    console.log('this is the error ',error);
     yield put({type:'GET_TODOS_FAILED',error})
  } 
}
function* getTodosSaga(feathersApp){
  yield takeEvery('GET_TODOS',getTodos,feathersApp);
}
//CREATE_TODO
function* createTodo(feathersApp,action){
  const { todo, description } = action
  try {
    const resp = yield call(apiCreateTodo,feathersApp, todo, description)
    console.log('this is the resp ',resp);
    yield put({type:"CREATE_TODO_SUCCEEDED",resp});
  } catch (error) {
    console.log('this is the error ',error);
     yield put({type:'CREATE_TODO_FAILED',error})
  } 
}
function* createTodoSaga(feathersApp){
  yield takeLatest('CREATE_TODO',createTodo,feathersApp);
}

export default function* rootSaga(feathersApp){
  yield[
      fork(getTodosSaga, feathersApp),
      fork(createTodoSaga, feathersApp),
  ]
}

// export default function* rootSaga(feathersApp) {
//   yield takeLatest('GET_TODOS', getTodos, feathersApp);
// }

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