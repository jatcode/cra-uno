import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {  withRouter } from 'react-router';
import { MyInput, MyTextarea, SimpleMap, MySelect, MyFileInput
} from '../../components/MyComponents'; 
import ImageUpload  from '../../components/ImageUpload';
import MyUpload  from '../../components/MyUpload'

class AddUser extends Component {
       
  componentDidMount(){
    this.props.loadracis();
  }
   
  static contexTypes = {
    router : PropTypes.object
  };
  
  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClick(e) {
    const { lat, lng } =e.latLng.toJSON();
    this.props.change('geoLocation.latitude',lat);
    this.props.change('geoLocation.longitude',lng);
  }
  
  handleImage(data){
    console.log('this.props en padre',this.props);
    console.log('What in data en padre',data);
    this.props.change('picture',data.imagePreviewUrl);
  }
  
  handleMyUpload(data){
    console.log('data en MYUPLOAD',data);
    this.props.change('picture',data.preview);
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
            {/* <Field name='picture'  component={ImageUpload} myFunc={this.handleImage.bind(this)}  /> */}
            <Field name='picture' component={ MyUpload } func={this.handleMyUpload.bind(this)}/>
            <Field name='roleName' component={MyInput} />
            <Field name='geoLocation.latitude' component={MyInput}  disabled="true" />
            <Field name='geoLocation.longitude' component={MyInput} />
            <SimpleMap 
                  containerElement={ <div style={{ height: `300px` }} ></div> }
                  mapElement={ <div style={{ height: `100%` }} ></div> }
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
            <Field name='email' component={MyInput} type="email" />
            <Field name='username' component={MyInput} />
            <Field name='description' component={MyTextarea} />              
          </div>
            
        </form>
      </div>
    );
  }
}

const validate = values=>{
  const {firstName, lastName, email, username  } = values;
  const errors ={};
  if(!firstName || firstName.trim() ===''){errors.firstName= 'firstName is required'};
  if(!lastName || lastName.trim() ===''){errors.lastName= 'lastName is required'};
  if(!email || email.trim() ===''){errors.email= 'email is required'};
  if(!username || username.trim() ===''){errors.username= 'username is required'};
  return errors
}

AddUser = reduxForm({
  form: 'addUser-form',
  validate
})(AddUser); //conecting it to reduxform
AddUser = withRouter(connect( )(AddUser)); //connecting it to the main store
export default AddUser;

