import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from "/imports/api/events.js";
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import ReactQuill from 'react-quill';

const buttonStyle = {
  margin: "10px 15px",
  maxWidth: "120px"
}

class ListEvents extends Component {
  handleEdit = (eventId) => {
    // onEdit we want to have the form on AddEvents populate the fields and allow for editing
    // so we pass the eventId to the parent component so that it tells AddEvent component what data is to be displayed
    this.props.handleEdit(eventId);
  }

  handleDelete = (eventId) => {
    // onDelete we just remove the event from the db
    Meteor.call('events.remove', {_id: eventId});
  }

  //componentWillMount --> loads data just before component is rendered; good for loading data
  render() {
    let isAdmin = false; 
    //If logged in
    if(this.props.currentUser) {
      isAdmin = this.props.currentUser.username === 'lionelat';
    } else {
      console.log('not logged in yet...');
    }

    // Use `` for ${event._id} --> takes a js expression that will be displayed as a template string
    return (
      <div className="events-container">
        <div className="page-header">
          <h1 className="event-head" style={{ margin: "20px 100px"}}>Upcoming Events</h1>
        </div>
        {
          this.props.events.length ? this.props.events.map((event) => (
            <div className="list-group" key={event._id} style={{ margin: "20px 100px" }}>
              <div className="list-group-item list-group-item-action flex-column align-items-start">

                <div className="d-flex w-100 justify-content-between">
                  {/*<h4 className="mb-1">{event.title}</h4>*/}
                  <p>
                  <a className="event-name" href={`/events/${event._id}`}>{event.title}</a> <br />

                  <small>When: {event.date}</small>
                  </p>
                </div>

                <p className="mb-1">{event.description}</p>
                {/*<div dangerouslySetInnerHTML={{__html: event.description}}></div>*/}

                { /*Show edit and delete button only if lionelat*/ }
                {isAdmin ?
                  <div className="controls row">
                  <button
                    className="btn btn-outline-warning col"
                    data-toggle="modal"
                    data-target="#myModal"
                    type="button"
                    style={buttonStyle}
                    onClick={() => this.handleEdit(event._id)}
                  >
                    Edit Event
                  </button>

                  <button
                    className="btn btn-outline-danger col"
                    style={buttonStyle}
                    onClick={() => this.handleDelete(event._id)}
                  >
                    Delete Event
                  </button> 
                </div> : ''}

              </div>
            </div>
          )) : ''
          //<div className="no-events text-center" style={{ padding: "100px 0" }}>OOOPSY: NO EVENTS REGISTERED</div>
        }
      </div>
    );
  }
}

export default withTracker(() => {
  //First set up subscription
  Meteor.subscribe('events');

  //Return an object. Whatever we return will be sent to 
  //ListEvents as props
  return {
    events: Events.find({}).fetch(), //Events.find({}) only returns a cursor; fetch() executes the search
    currentUser: Meteor.user()
  }
})(ListEvents);