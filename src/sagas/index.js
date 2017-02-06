import { fork } from 'redux-saga/effects';

import * as userSagas from '../containers/users/sagas'


export default function* rootSaga(feathersApp){
  yield[
      fork(userSagas.getUsersSaga, feathersApp),
      fork(userSagas.createUserSaga, feathersApp),
  ]
}

// fork(updateTodoSaga, feathersApp),
// fork(getTodosSaga, feathersApp),
// fork(getSingleTodoSaga, feathersApp),
// fork(loadFormSaga, feathersApp),
// fork(deleteTodoSaga, feathersApp),
// fork(createTodoSaga, feathersApp),

// //GET_TODOS
// function* getTodos(feathersApp){
//   try {
//     const data = yield call(apiGetAllTodos,feathersApp)
//     yield put({type:"GET_TODOS_SUCCEEDED",data});
//   } catch (error) {
//     console.log('this is the error ',error);
//      yield put({type:'GET_TODOS_FAILED',error})
//   } 
// }
// function* getTodosSaga(feathersApp,action){
//   yield takeEvery('GET_TODOS',getTodos,feathersApp);
// }
// //CREATE_TODO
// function* createTodo(feathersApp,action){
//   const { values:{todo, description} } = action
//   try {
//     const resp = yield call(apiCreateTodo,feathersApp, todo, description)
//     // console.log('this is the resp ',resp);
//     yield put({type:"CREATE_TODO_SUCCEEDED",resp});
// 		yield browserHistory.push(`/`);
// 		yield put({type:"GET_TODOS"});
//   } catch (error) {
//     console.log('this is the error ',error);
//      yield put({type:'CREATE_TODO_FAILED',error})
//   } 
// }
// function* createTodoSaga(feathersApp){
//   yield takeLatest('CREATE_TODO',createTodo,feathersApp);
// }
// //UPDATE_TODO
// function* updateTodo(feathersApp,action){
//   const { payload:{idTodo, todo, description} } = action
//   try {
//     const {code, ...data } = yield call(apiUpdateTodo,feathersApp, idTodo,todo, description)
// 		if(code){
// 			// console.log('codigo,,, ',code);
// 			var {response:{error, statusText}} = data;
// 			console.log('response: ',data);
// 			console.log('statusTEXT: ',statusText);
// 			console.log('response.ERROR.NAME: ',error.name);
// 			console.log('response.ERROR.MESSAGE: ',error.message);
// 		}else{
// 			// console.log('this is the resp ',data);
// 			yield put({type:"UPDATE_TODO_SUCCEEDED",data});
// 			yield browserHistory.push(`/`);
// 			yield put({type:"GET_TODOS"});
// 		}
//   } catch (error) {
//     console.log('Something else happened on update ',error);
//      yield put({type:'UPDATE_TODO_FAILED',error})
//   } 
// }
// function* updateTodoSaga(feathersApp){
//   yield takeLatest('UPDATE_TODO',updateTodo,feathersApp);
// }
// //DELETE_TODO
// function* deleteTodo(feathersApp,{idTodo}){
//   try {
// 		const {code, ...data } = yield call(apiDeleteTodo,feathersApp, idTodo)
// 		if(code){
// 			// console.log('codigo,,, ',code);
// 			var {response:{error, statusText}} = data;
// 			console.log('response: ',data);
// 			console.log('statusTEXT: ',statusText);
// 			console.log('response.ERROR.NAME: ',error.name);
// 			console.log('response.ERROR.MESSAGE: ',error.message);
// 			yield put({type:'DELETE_TODO_FAILED',error}) 
// 		} else{
// 			console.log('data: ',data);
// 			yield put({type:"DELETE_TODO_SUCCEEDED",data});
// 			yield browserHistory.push(`/`);
// 			yield put({type:"GET_TODOS"});
// 		}
//   } catch (error) {
//     console.log('something else happened on delete: ',error);
//      yield put({type:'DELETE_TODO_FAILED',error})
//   } 
// }
// function* deleteTodoSaga(feathersApp){
//   yield takeLatest('DELETE_TODO',deleteTodo,feathersApp);
// }
// function* callGetSingleTodo(feathersApp, {idTodo}) {
//   const singleTodoItem = yield call(apiGetSingleTodo, feathersApp, idTodo);
//   yield put({type: "GET_SINGLE_TODO_SUCCEEDED", singleTodoItem});
// }
// 
// function* getSingleTodoSaga(feathersApp) {
//   yield takeEvery("GET_SINGLE_TODO", callGetSingleTodo, feathersApp);
// }
// function* callLoadForm(feathersApp, {idTodo}) {
//   const singleTodoItem = yield call(apiGetSingleTodo, feathersApp, idTodo);
//   yield put({type: "LOAD_FORM_SUCCEEDED", singleTodoItem});
// }
// function* loadFormSaga(feathersApp) {
// 	yield takeEvery("LOAD_FORM", callLoadForm, feathersApp);
// }
