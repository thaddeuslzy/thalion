//React Quill Component to edit content of testimony
import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Testimonies } from "/imports/api/testimonies.js";
//import { ImageResize } from 'quill-image-resize-module-react';

class TestimonyEditor extends Component {
	constructor(props) {
		//Receive testimony as props --> title, description, date, content
    super(props);
    this.state = { text: props.testimony.content }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleSubmit(event) {
  	event.preventDefault();
  	//Call Meteor method to update testimony details content
  	Meteor.call('testimonies.updateContent', this.props.testimony._id, this.state.text);

  	this.setState({ text: ''});
  }

  render() {
    return (
      <div className="editor">
      	<form onSubmit={this.handleSubmit.bind(this)}>
	      	<div>
	      		<ReactQuill value={this.state.text}
	                  		onChange={this.handleChange}
	                  		placeholder="Enter Testimony Description"
	                  		modules={TestimonyEditor.modules}
	                  		formats={TestimonyEditor.formats} />
	        </div>
	        <button type="submit" className="btn btn-primary">Submit Testimony Content</button> 
        </form>
      </div>
    );
  }
};

TestimonyEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
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
TestimonyEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default TestimonyEditor;