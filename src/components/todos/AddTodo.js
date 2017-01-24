import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  Header, Icon } from 'semantic-ui-react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {  withRouter } from 'react-router';
import { MyInput, MyTextarea } from '../MyComponents'; 

class AddTodo extends Component {   
   
  static contexTypes = {
    router : PropTypes.object
  };
  submit(values){    
		// console.log('values en submit ',values);
		try{
			this.props.createTodo(values);
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

AddTodo = reduxForm({
  form: 'addTodo-form',
  validate
})(AddTodo); //conecting it to reduxform
AddTodo = withRouter(connect( )(AddTodo)); //connecting it to the main store
export default AddTodo;

