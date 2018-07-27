import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Events } from "/imports/api/events.js";
//import { ImageResize } from 'quill-image-resize-module-react';

class EventEditor extends Component {
	constructor(props) {
		//Receive event as props --> title, description, date, content
    super(props);
    this.state = { text: props.event.content }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleSubmit(event) {
  	event.preventDefault();
  	//Call Meteor method to update event details content
  	Meteor.call('events.updateContent', this.props.event._id, this.state.text);

  	this.setState({ text: ''});
  }

  render() {
    return (
      <div className="editor">
      	<form onSubmit={this.handleSubmit.bind(this)}>
	      	<div>
	      		<ReactQuill value={this.state.text}
	                  		onChange={this.handleChange}
	                  		placeholder="Enter Event Description"
	                  		modules={EventEditor.modules}
	                  		formats={EventEditor.formats} />
	        </div>
	        <button type="submit" className="btn btn-primary">Submit Event Content</button> 
        </form>
      </div>
    );
  }
};

EventEditor.modules = {
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
EventEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default EventEditor;