import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import * as type from './constants'
import { apiGetAllUsers, apiCreateUser } from '../../services/UsersApi';


//GET_USERS
function* getUsers(feathersApp){
  try {
    const result = yield call(apiGetAllUsers,feathersApp)
    yield put({type:type.GET_USERS_SUCCEEDED,result});
  } catch (error) {
    console.log('ERROR ON getUsers executing saga ',error);
     yield put({type:type.GET_USERS_FAILED,error})
  } 
}
 export function* getUsersSaga(feathersApp){
  yield takeEvery(type.GET_USERS,getUsers,feathersApp);
}
// //CREATE_USER
function* createUser(feathersApp,action){  
  try {
    const result = yield call(apiCreateUser,feathersApp, action.payload)
    yield put({type:type.CREATE_USER_SUCCEEDED,result});
		yield browserHistory.push(`/`);
		yield put({type:type.GET_USERS});
  } catch (error) {
    console.log('this is the error ',error);
     yield put({type:type.CREATE_USER_FAILED,error})
  } 
}
export function* createUserSaga(feathersApp){
  yield takeLatest(type.CREATE_USER,createUser,feathersApp);
}


// //DELETE_USER

// function* deleteTodoSaga(feathersApp){
//   yield takeLatest('DELETE_TODO',deleteTodo,feathersApp);
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