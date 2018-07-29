//Form to add a new testimony
import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Testimonies } from "/imports/api/testimonies.js";

//Main Form should include: title, author, short description
//testimony image, content is in the other file
class AddTestimony extends Component {
	constructor(props) {
    super(props);
    const testimony = {
      title: props.testimony.title,
      description: props.testimony.author,
      date: props.testimony.description
    };
    this.state = { 
      testimony: testimony,
      isUpdating: props.isUpdating
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  // React Lifecycle method that runs when props are updated and sets them into state
  componentWillReceiveProps(nextProps) {
    this.setState({
      testimony: nextProps.testimony,
      isUpdating: nextProps.isUpdating
    });
  }

  handleChange = (event) => {
    const field = event.target.name;

    // onChange we take the event in state and create a new object 
    // that's updated depending on which field has changed
    // we use square braces around the key `field` coz its a variable 
    // (we are setting state with a dynamic key name)
    const newTestimony = Object.assign({}, this.state.testimony, {[field]: event.target.value});

    // we then set new event object into state
    this.setState({
      testimony: newTestimony
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //destructuring the state
    const { title, author, description } = this.state.testimony;

    // checks whether it is an update
    //if not when you hit the submit button it inserts a new event into the db
    if (!this.props.isUpdating) {
      Meteor.call('testimonies.insert', title, author, description);
    } else {
      // if the flag isUpdating is true it updates an existing event with changes made
      Meteor.call('testimonies.update', this.state.testimony._id, title, author, description);
      // it then sets flag back to false
      this.setState({
        isUpdating: false
      })
    }

    const newTestimony = {
      title: "",
      author: "",
      description: ""
    }

    this.setState({
      testimony: newTestimony
    })
  }

  renderSubmitButton() {
    // renders submit button dynamically depending on whether isUpdating flag is true/false
    if(this.state.isUpdating) {
      return ( <button type="submit" className="btn btn-primary">Update This Testimony</button> );
    }
      return( <button type="submit" className="btn btn-primary">Add Testimony</button> );
  }

  render() {
    const { testimony } = this.state;
    let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');

    //Only show the AddTestimony form to admin user
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
                  placeholder="Enter testimony title"
                  name="title"
                  value={testimony.title ? testimony.title : ""}
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
                  value={testimony.author ? testimony.author : ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description:</label>
                
                <textarea
                rows="4" cols="50" 
                className="form-control"
                placeholder="Enter testimony description"
                name="description"
                value={testimony.description ? testimony.description : ""}
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
})(AddTestimony);