import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {  withRouter } from 'react-router';
import { MyInput, MyTextarea, SimpleMap
} from '../../components/MyComponents'; 
import ImageUpload  from '../../components/ImageUpload';
import SelectBox from '../../components/SelectBox';
import './user.css';


class AddUser extends Component {
  
     
  componentDidMount(){
    
  }
   
  static contexTypes = {
    router : PropTypes.object
  };
  
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMapClick(e) {
    // console.log('just local PROPS,',e);
  }
  handleMarkerClick(e) {
    const { lat, lng } =e.latLng.toJSON();
    this.props.change('latitude',lat);
    this.props.change('longitude',lng);
  }
  
  handleImage(e){
    e.preventDefault();
    // let reader= new FileReader();
    // let file= e.target.files[0];
    // reader.onloadend = ()=>{
    //   
    // }
    
  }
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
      <div>
        {/* <div className="breadcrumb">
          <h3>Add User</h3>
        </div> */}
        <form  className="pure-form pure-form-stacked contenedor" onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="column left">
            <span className="mheader">Profile Settings</span>
            <Field name='picture'  component={ImageUpload} onChange={this.handleImage} />
            <Field name='roleName' component={MyInput} />
            <Field name='latitude' component={MyInput} />
            <Field name='longitude' component={MyInput} />
            <SimpleMap 
              containerElement={
                <div style={{ height: `300px` }} ></div>
              }
              mapElement={
                <div style={{ height: `100%` }} ></div>
              }
              onMapClick={this.handleMapClick}
              onMarkerClick={this.handleMarkerClick}
            />
            <Field name='racis' component={SelectBox} />            
          <br/>
          <div>
            <button className='pure-button pure-button-primary' type='submit' disabled={submitting}>Submit</button>
            <button className='pure-button ' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
          </div>
          <div className="column right">
            <span className="mheader">Personal Details</span>
            <Field name='firstName' component={MyInput} />
            <Field name='lastName' component={MyInput} />
            <Field name='email' component={MyInput} />
            <Field name='username' component={MyInput} />
            <Field name='description' component={MyTextarea} />              
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

