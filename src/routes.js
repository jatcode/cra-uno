import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import AddUser from './containers/users/AddUser';
import UpdateUser from './containers/users/UpdateUser';
import ViewTodo from './components/todos/ViewTodo';



const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home}/>
		<Route path="/adduser" component={AddUser}/>
		<Route path="/viewTodo/:id" component={ViewTodo}/>
		<Route path="/updateuser/:id" component={UpdateUser}/>
	</Route>
)
export default routes
