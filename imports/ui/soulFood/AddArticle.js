//Form to add a new article
import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Articles } from "/imports/api/articles.js";

//Main Form should include: title, author, short description
//article image, content is in the other file
class AddArticle extends Component {
	constructor(props) {
    super(props);
    const article = {
      title: props.article.title,
      description: props.article.author,
      date: props.article.description
    };
    this.state = { 
      article: article,
      isUpdating: props.isUpdating
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  // React Lifecycle method that runs when props are updated and sets them into state
  componentWillReceiveProps(nextProps) {
    this.setState({
      article: nextProps.article,
      isUpdating: nextProps.isUpdating
    });
  }

  handleChange = (event) => {
    const field = event.target.name;

    // onChange we take the event in state and create a new object 
    // that's updated depending on which field has changed
    // we use square braces around the key `field` coz its a variable 
    // (we are setting state with a dynamic key name)
    const newArticle = Object.assign({}, this.state.article, {[field]: event.target.value});

    // we then set new event object into state
    this.setState({
      article: newArticle
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //destructuring the state
    const { title, author, description } = this.state.article;

    // checks whether it is an update
    //if not when you hit the submit button it inserts a new event into the db
    if (!this.props.isUpdating) {
      Meteor.call('articles.insert', title, author, description);
    } else {
      // if the flag isUpdating is true it updates an existing event with changes made
      Meteor.call('articles.update', this.state.article._id, title, author, description);
      // it then sets flag back to false
      this.setState({
        isUpdating: false
      })
    }

    const newArticle = {
      title: "",
      author: "",
      description: ""
    }

    this.setState({
      article: newArticle
    })
  }

  renderSubmitButton() {
    // renders submit button dynamically depending on whether isUpdating flag is true/false
    if(this.state.isUpdating) {
      return ( <button type="submit" className="btn btn-primary">Update This Article</button> );
    }
      return( <button type="submit" className="btn btn-primary">Add Article</button> );
  }

  render() {
    const { article } = this.state;
    let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');

    //Only show the AddArticle form to admin user
    if (isAdmin) {
      return (
        <div>
          <div className="jumbotron" style={{ margin: "0 250px" }}>
            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter article title"
                  name="title"
                  value={article.title ? article.title : ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Author:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter author's name"
                  name="author"
                  value={article.author ? article.author : ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description:</label>
                
                <textarea
                rows="4" cols="50" 
                className="form-control"
                placeholder="Enter article description"
                name="description"
                value={article.description ? article.description : ""}
                onChange={this.handleChange}
                > </textarea>
              </div>
              {this.renderSubmitButton()}

            </form>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  }
})(AddArticle);