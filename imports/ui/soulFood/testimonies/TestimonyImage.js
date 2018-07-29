//React Quill component that only has add image option
//React Quill Component to edit content of testimony
import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Testimonies } from "/imports/api/testimonies.js";
//import { ImageResize } from 'quill-image-resize-module-react';

class TestimonyImage extends Component {
	constructor(props) {
		//Receive testimony as props --> title, description, date, content
    super(props);
    this.state = { image: props.testimony.mainImage }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ image: value });
  }

  handleSubmit(event) {
  	event.preventDefault();
  	//Call Meteor method to update testimony details content
  	Meteor.call('testimonies.updateImage', this.props.testimony._id, this.state.image);

  	this.setState({ image: ''});
  }

  render() {
    return (
      <div className="image-editor">
      	<form onSubmit={this.handleSubmit.bind(this)}>
	      	<div>
	      		<ReactQuill value={this.state.image}
	                  		onChange={this.handleChange}
	                  		placeholder="Add Image"
	                  		modules={TestimonyImage.modules}
	                  		formats={TestimonyImage.formats} />
	        </div>
	        <button type="submit" className="btn btn-primary">Submit Testimony Image</button> 
        </form>
      </div>
    );
  }
};

TestimonyImage.modules = {
  toolbar: [
    ['image'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
TestimonyImage.formats = [
	'image'
];

export default TestimonyImage;