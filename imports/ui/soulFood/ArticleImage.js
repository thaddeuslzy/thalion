//React Quill component that only has add image option
//React Quill Component to edit content of article
import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Articles } from "/imports/api/articles.js";
//import { ImageResize } from 'quill-image-resize-module-react';

class ArticleImage extends Component {
	constructor(props) {
		//Receive article as props --> title, description, date, content
    super(props);
    this.state = { image: props.article.mainImage }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ image: value });
  }

  handleSubmit(event) {
  	event.preventDefault();
  	//Call Meteor method to update article details content
  	Meteor.call('articles.updateImage', this.props.article._id, this.state.image);

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
	                  		modules={ArticleImage.modules}
	                  		formats={ArticleImage.formats} />
	        </div>
	        <button type="submit" className="btn btn-primary">Submit Article Image</button> 
        </form>
      </div>
    );
  }
};

ArticleImage.modules = {
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
ArticleImage.formats = [
	'image'
];

export default ArticleImage;