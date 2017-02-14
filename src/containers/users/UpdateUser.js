import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { MyInput, MyTextarea } from '../../components/MyComponents';
 

class UpdateUser extends Component {   
   
	 componentDidMount() {
		 console.log(this.props.params.id);
    // his.props.loadFormTodo(this.props.params.id)
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
          
          
            <h2> Add Todo </h2>
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

UpdateUser = reduxForm({
  form: 'addTodo-form',
  validate,
	enableReinitialize:true
})(UpdateUser); //conecting it to reduxform

UpdateUser = connect( 
	state => ({
		initialValues: state.formLoader // pull initial values from account reducer
	}),null)(UpdateUser); //connecting it to the main store


export default UpdateUser;

