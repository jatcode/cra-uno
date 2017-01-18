/* eslint-disable */
import { call, put, takeEvery, takeLatest,select, take, fork } from 'redux-saga/effects';


export  function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()
    console.log('action', action)
    console.log('state after', state)
  })
}


export function* getTodosSaga(action){
}
// export function* getTodos(action){
//   try {
//     const request = yield call(/*MISING APICALLFUNTION AND PARAMETERS FOR IT COMMING FROM THE SAME ARGUMENTS IN THE FUN*/);
//     yield put({type:"GET_TODOS_SUCCEEDED",request})
//   } catch (error) {
//     yield put({type: "GET_TODOS_FAILED",error})
//   } 
// }


export default function* rootSaga(feathersApp){
  yield [
       fork(getTodosSaga, feathersApp),
       fork(watchAndLog),
  ]
  // yield takeEvery('GET_TODOS',getTodos);
  // yield takeEvery('GET_TODOS',createTodo);
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