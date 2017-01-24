import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import AddTodo from './components/todos/AddTodo';
import UpdateTodo from './components/todos/UpdateTodo';
import ViewTodo from './components/todos/ViewTodo';
import Lista1 from './components/todos/Lista1';
// import Form from './components/todos/Form';



const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home}/>
		<Route path="/addtodo" component={AddTodo}/>
		<Route path="/viewTodo/:id" component={ViewTodo}/>
		<Route path="/updatetodo/:id" component={UpdateTodo}/>
		<Route path="/lista" component={Lista1}/>
	</Route>
)
export default routes
