import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  Header, Icon } from 'semantic-ui-react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { MyInput, MyTextarea } from '../MyComponents'; 

class UpdateTodo extends Component {   
   
	 componentDidMount() {
		 console.log(this.props.params.id);
	 	this.props.loadFormTodo(this.props.params.id)
	 }
	 
  static contexTypes = {
    router : PropTypes.object
  };
  submit({_id, todo, description}){    
		try{
			this.props.updateTodo(_id, todo, description);
		}catch(e){
			  if(e.validationErrors) {
	        throw new SubmissionError(e.validationErrors)
	      } else {
	        console.log(e);
	      }
		}
  }
  render() {
    const { handleSubmit, pristine, reset, submitting }= this.props;
    return (      
      <div>
        <div >
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content> Add Todo </Header.Content>
          </Header>
        </div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <Field name='todo' component={MyInput} />
          <Field name='description' component={MyTextarea} />              
          <br/>
          <div className='ui center aligned'>
            <button type='submit' disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = values=>{
  const {todo, description} = values;
  const errors ={};
  if(!todo || todo.trim() ===''){errors.todo= 'todo is required'};
  if(!description || description.trim() ===''){errors.description= 'description is required'};
  return errors
}

UpdateTodo = reduxForm({
  form: 'addTodo-form',
  validate,
	enableReinitialize:true
})(UpdateTodo); //conecting it to reduxform

UpdateTodo = connect( 
	state => ({
		initialValues: state.formLoader // pull initial values from account reducer
	}),null)(UpdateTodo); //connecting it to the main store


export default UpdateTodo;

