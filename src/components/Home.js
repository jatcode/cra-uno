import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodolist from '../containers/VisibleTodoList';
import Footer from './Footer';


const Home = ()=>(
	<div>
		<AddTodo />
		<VisibleTodolist />
		<Footer />
	</div>
)


export default Home;