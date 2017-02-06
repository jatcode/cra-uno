import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  Header, Icon } from 'semantic-ui-react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {  withRouter } from 'react-router';
import { MyInput, MyTextarea } from '../../components/MyComponents'; 
import './user.css';

class AddUser extends Component {   
   
  static contexTypes = {
    router : PropTypes.object
  };
  submit(values){    
		// console.log('values en submit ',values);
		// console.log('values en this.props ',this.props);
    
		try{
			this.props.createUser(values);
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
      <div className="contenedor">
        <div className="breadcrumb">
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content> Add User </Header.Content>
          </Header>
        </div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="formrow">            
            <div className=" right">
              <span className="mheader">Personal Details</span>
              <Field name='firstName' component={MyInput} />
              <Field name='lastName' component={MyInput} />
              <Field name='email' component={MyInput} />
              <Field name='username' component={MyInput} />
              <Field name='description' component={MyTextarea} />              
            </div>
            <div className="  left">
              <span className="mheader">Profile Settings</span>
              <Field name='picture' component={MyInput} />
              <Field name='roleName' component={MyInput} />
              <Field name='latitude' component={MyInput} />
              <Field name='longitude' component={MyInput} />
              <Field name='racis' component="select">
                <option value="">Select a racis...</option>
                <option value="#ff0000">Red</option>
                <option value="#00ff00">Green</option>
                <option value="#0000ff">Blue</option>
                  {/* { colors.map(
                      colorOption =>
                        <option value={colorOption} key={colorOption}>
                            {colorOption}
                        </option>
                      )
                  } */}
              </Field>
            </div>
          </div>
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

AddUser = reduxForm({
  form: 'addUser-form',
  validate
})(AddUser); //conecting it to reduxform
AddUser = withRouter(connect( )(AddUser)); //connecting it to the main store
export default AddUser;

