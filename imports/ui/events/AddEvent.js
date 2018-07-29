import React, { Component } from "react";
import { Events } from "/imports/api/events.js";
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    const event = {
      title: props.event.title,
      description: props.event.description,
      date: props.event.date,
      cost: props.event.cost
    };
    this.state = { 
      event: event,
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

  handleSubmit = (event) => {
    event.preventDefault();

    //destructuring the state
    const { title, description, date, cost } = this.state.event;

    // checks whether it is an update
    //if not when you hit the submit button it inserts a new event into the db
    if (!this.props.isUpdating) {
      Meteor.call('events.insert', title, description, date, cost);
    } else {
      // if the flag isUpdating is true it updates an existing event with changes made
      Meteor.call('events.update', this.state.event._id, title, description, date, cost);
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
    let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');

    //Only show the AddEvent form to admin user
    if (isAdmin) {
      return (
        <div>
          <div className="jumbotron" style={{ margin: "0 50px" }}>
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

              <div className="form-group">
                <label>Cost:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter cost"
                  name="cost"
                  value={event.cost ? event.cost : ""}
                  onChange={this.handleChange}
                />
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
})(AddEvent);