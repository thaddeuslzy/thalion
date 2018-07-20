import React, { Component } from "react";
import { Events } from "/imports/api/events.js";
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { withTracker } from 'meteor/react-meteor-data';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      event: props.event,
      isUpdating: props.isUpdating
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  // React Lifecycle method that runs when props are updated and sets them into state
  componentWillReceiveProps(nextProps) {
    this.setState({
      event: nextProps.event,
      isUpdating: nextProps.isUpdating
    });
  }

  // For 'title' and 'date'
  handleChange = (event) => {
    const field = event.target.name;

    // onChange we take the event in state and create a new object 
    // that's updated depending on which field has changed
    // we use square braces around the key `field` coz its a variable 
    // (we are setting state with a dynamic key name)
    const newEvent = Object.assign({}, this.state.event, {[field]: event.target.value});

    // we then set new event object into state
    this.setState({
      event: newEvent
    })
  }

  //For Quill editor
  handleEditorChange = (event) => { //html value
    //const newEvent = Object.assign({}, this.state.event, {description: event});

    const newEvent = {
      title: this.state.event.title,
      description: event,
      date: this.state.event.date
    }
    this.setState({   
      event: newEvent
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //destructuring the state
    const { title, description, date } = this.state.event;

    // checks whether it is an update
    //if not when you hit the submit button it inserts a new event into the db
    if (!this.props.isUpdating) {
      Meteor.call('events.insert', title, description, date);
    } else {
      // if the flag isUpdating is true it updates an existing event with changes made
      Meteor.call('events.update', this.state.event._id, title, description, date);
      // it then sets flag back to false
      this.setState({
        isUpdating: false
      })
    }

    const newEvent = {
      title: "",
      description: "",
      date: ""
    }

    this.setState({
      event: newEvent
    })
  }

  renderSubmitButton() {
    // renders submit button dynamically depending on whether isUpdating flag is true/false
    if(this.state.isUpdating) {
      return ( <button type="submit" className="btn btn-primary">Update This Event</button> );
    }
      return( <button type="submit" className="btn btn-primary">Add Event</button> );
  }

  render() {
    const { event } = this.state;
    
    let isAdmin = false; 
    //If logged in
    if(this.props.currentUser)  {
      isAdmin = this.props.currentUser.username === 'lionelat';
    } else {
      console.log('not logged in yet...');
    }

    return (
      <div>
        
        <div className="text-center">
          <h4>OYP Events</h4>
        </div>
        <hr />

        { /*Hides this form from non-admins */}
        { isAdmin? 
        <div className="jumbotron" style={{ margin: "0 250px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event title"
                name="title"
                value={event.title ? event.title : ""}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              
              <textarea
              rows="4" cols="50" 
              className="form-control"
              placeholder="Enter event description"
              name="description"
              value={event.description ? event.description : ""}
              onChange={this.handleChange}
              > </textarea>
              
              {/* Problems with Quill: doesn't update, doesn't show w/o html tags
              <div name="description">
                <ReactQuill value={event.description ? event.description : ""}
                            onChange={this.handleEditorChange}
                            placeholder="Enter event description"
                             />
              </div> */}
              
            </div>

            <div className="form-group">
              <label>Event Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="<day> <month> <year> <time>"
                name="date"
                value={event.date ? event.date : ""}
                onChange={this.handleChange}
              />
            </div>

            {this.renderSubmitButton()}

          </form>
        </div> : ''}
      </div>
    );
  }
}

//export default AddEvent;

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  }
})(AddEvent);