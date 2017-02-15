import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {  withRouter } from 'react-router';
import { MyInput, MyTextarea, SimpleMap, MySelect
} from '../../components/MyComponents'; 
import ImageUpload  from '../../components/ImageUpload';
import './user.css';


class AddUser extends Component {
  
     constructor(props){
       super(props)
       this.state={racisOptions:['R', 'A', 'C', 'I', 'S' ]}
     }
     
  componentDidMount(){
    this.props.loadracis();
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
    this.props.change('geoLocation.latitude',lat);
    this.props.change('geoLocation.longitude',lng);
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
    const racisOptions=['R', 'A', 'C', 'I', 'S' ];
    return (      
      <div>
        <form  className="pure-form pure-form-stacked contenedor" onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="column left">
            <span className="mheader">Profile Settings</span>
            <Field name='picture'  component={ImageUpload} onChange={this.handleImage} />
            <Field name='roleName' component={MyInput} />
            <Field name='geoLocation.latitude' component={MyInput} />
            <Field name='geoLocation.longitude' component={MyInput} />
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
            <Field name='racis' component={MySelect} options={racisOptions}  />            
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

