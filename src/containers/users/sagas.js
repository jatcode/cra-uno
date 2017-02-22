import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import * as type from './constants'
import { apiGetRacis, apiGetAllUsers, 
          apiCreateUser, apiGetSingleUser,
          apiDeleteUser, apiUpdateUser } from '../../services/UsersApi';


//GET_RACIS
function* getRACIS(feathersApp){
  try {
    const result = yield call(apiGetRacis,feathersApp)
    yield put({type:'GET_RACIS_SUCCEDDED',result});
  } catch (error) {
    console.log('ERROR ON getRACIS executing saga ',error);
     yield put({type:'GET_RACIS_FAILED',error})
  } 
}
 export function* getRACISSaga(feathersApp){
  yield takeEvery('GET_RACIS',getRACIS,feathersApp);
}

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
    const {_id} = result;
    if(_id && Object.keys(result).length !==0){
      console.log("this is the id CREATED,",_id)
      console.log('LLAVES QUE TIENE EL OBJECTO',Object.keys(result).length);
      yield put({type:type.CREATE_USER_SUCCEEDED,result});
      yield browserHistory.push(`/userlist`);
      yield put({type:type.GET_USERS});
    }else{
      console.log("ID VALOR",_id);
      console.log('LLAVES QUE TIENE EL OBJECTO',Object.keys(result).length);
      yield put({type:type.CREATE_USER_FAILED,result});
    }
  } catch (error) {
    console.log('ON CreateUser Saga Error ',error);
  } 
}
export function* createUserSaga(feathersApp){
  yield takeLatest(type.CREATE_USER,createUser,feathersApp);
}

//GET SINGLE_USER
function* getSingleUser(feathersApp,{idUser}){
    const result = yield call(apiGetSingleUser, feathersApp, idUser);
    yield put({type: type.GET_SINGLE_USER_SUCCEEDED, result});
}
export function* getSingleUserSaga(feathersApp) {
  yield takeEvery(type.GET_SINGLE_USER, getSingleUser, feathersApp);
}

//DELETE_USER
function* deleteUser(feathersApp,{idUser}){
  try {
		const {code, ...data } = yield call(apiDeleteUser,feathersApp, idUser)
		if(code){
			// console.log('codigo,,, ',code);
			var {response:{error, statusText}} = data;
			console.log('response: ',data);
			console.log('statusTEXT: ',statusText);
			console.log('response.ERROR.NAME: ',error.name);
			console.log('response.ERROR.MESSAGE: ',error.message);
			yield put({type:type.DELETE_USER_FAILED,error}) 
		} else{
			// console.log('data: ',data);
			yield put({type:type.DELETE_USER_SUCCEEDED,data});
			yield browserHistory.push(`/userlist`);
			yield put({type:type.GET_USERS});
		}
  } catch (error) {
    console.log('something else happened on delete: ',error);
     yield put({type:type.DELETE_USER_FAILED,error})
  } 
  
}

export function* deleteUserSaga(feathersApp){
  yield takeLatest(type.DELETE_USER,deleteUser,feathersApp);
}

//UPDATE_USER
function* updateUser(feathersApp,action){
  try {
    const {code, ...data } = yield call(apiUpdateUser,feathersApp, action.payload)
		if(code){
			// console.log('codigo,,, ',code);
			var {response:{error, statusText}} = data;
			console.log('response: ',data);
			console.log('statusTEXT: ',statusText);
			console.log('response.ERROR.NAME: ',error.name);
			console.log('response.ERROR.MESSAGE: ',error.message);
		}else{
			console.log('this is the resp ',data);
			yield put({type:type.UPDATE_USER_SUCCEEDED,data});
			yield browserHistory.push(`/userlist`);
			yield put({type:type.GET_USERS});
		}
  } catch (error) {
    console.log('Something else happened on update ',error);
     yield put({type:type.UPDATE_USER_FAILED,error})
  } 
}
export function* updateUserSaga(feathersApp){
  yield takeLatest(type.UPDATE_USER,updateUser,feathersApp);
}


//LOAD_FORM
function* LoadForm(feathersApp,{idUser}){
    const result = yield call(apiGetSingleUser, feathersApp, idUser);
    yield put({type: "LOAD_FORM_SUCCEEDED", result});
  
}

export function* loadFormSaga(feathersApp) {
	yield takeEvery("LOAD_FORM", LoadForm, feathersApp);
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