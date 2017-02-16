/* eslint-disable */
import React, { Component } from 'react';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    console.log('handle uploading-', this.state);
  }
  habla(e, imagePreview){
    e.preventDefault();
    console.log('e ',e);
    console.log('props',this.props);
    console.log('imagePreview en hijo',imagePreview)
    return this.props.myFunc(imagePreview);
  }
  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{maxWidth: `calc(100% - 20px)`,maxHeight: `100px`}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div className="previewComponent">
        {/* <form  className="pure-form pure-form-stacked" onSubmit={(e)=>this._handleSubmit(e)}> */}
          <input   type="file" onChange={(e)=>this._handleImageChange(e)} />
          {/* <button className="pure-button pure-button-primary" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
          <button className="pure-button pure-button-primary" onClick={(e)=>this.habla(e,$imagePreview)}>Habla Image</button>
        {/* </form> */}
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
export default ImageUpload;