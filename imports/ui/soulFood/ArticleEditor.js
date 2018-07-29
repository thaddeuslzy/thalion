//React Quill Component to edit content of article
import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Articles } from "/imports/api/articles.js";
//import { ImageResize } from 'quill-image-resize-module-react';

class ArticleEditor extends Component {
	constructor(props) {
		//Receive article as props --> title, description, date, content
    super(props);
    this.state = { text: props.article.content }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleSubmit(event) {
  	event.preventDefault();
  	//Call Meteor method to update article details content
  	Meteor.call('articles.updateContent', this.props.article._id, this.state.text);

  	this.setState({ text: ''});
  }

  render() {
    return (
      <div className="editor">
      	<form onSubmit={this.handleSubmit.bind(this)}>
	      	<div>
	      		<ReactQuill value={this.state.text}
	                  		onChange={this.handleChange}
	                  		placeholder="Enter Article Description"
	                  		modules={ArticleEditor.modules}
	                  		formats={ArticleEditor.formats} />
	        </div>
	        <button type="submit" className="btn btn-primary">Submit Article Content</button> 
        </form>
      </div>
    );
  }
};

ArticleEditor.modules = {
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
ArticleEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default ArticleEditor;