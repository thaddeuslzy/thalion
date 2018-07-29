//List of testimonies
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Testimonies } from "/imports/api/testimonies.js";
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import classnames from 'classnames';

const buttonStyle = {
  margin: "10px 15px",
  maxWidth: "130px"
}

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];



class TestimonyList extends Component {


  handleEdit = (testimonyId) => {
    // onEdit we want to have the form on AddEvents populate the fields and allow for editing
    // so we pass the eventId to the parent component so that it tells AddEvent component what data is to be displayed
    this.props.handleEdit(testimonyId);
  }

  handleDelete = (testimonyId) => {
    // onDelete we just remove the event from the db
    Meteor.call('testimonies.remove', {_id: testimonyId});
  }

  //componentWillMount --> loads data just before component is rendered; good for loading data
  render() {
    let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');

    // Use `` for ${event._id} --> takes a js expression that will be displayed as a template string
    return (
      <div className="testimonies-container">
        <div className="page-header">
          <h1 className="testimony-head" style={{ margin: "20px 100px"}}>Testimonies</h1>
        </div>
        {
          this.props.testimonies.length ? this.props.testimonies.map((testimony) => (
            <div className="list-group" key={testimony._id} style={{ margin: "20px 100px" }}>
              <div className="list-group-item list-group-item-action flex-column align-items-start">

                <div className="card lg m-b-6 content_text testimony inverted ">                  
                  <a className="card-link" href={`/testimonies/${testimony._id}`}>
                    <div className="card-header p-t-4" >
                      <div dangerouslySetInnerHTML={{__html: testimony.mainImage }}></div>
                    </div>
                    <div className="card-block p-x-0 p-b-0">
                      <h2 className="card-title">{testimony.title}</h2>
                    </div>
                  </a>
                </div>

                <p className="mb-1">{testimony.description}</p>
                <p className="teaser">
                  <small>
                    <b>{testimony.author}</b> | {testimony.createdAt.getDate()} {months[testimony.createdAt.getMonth()]} {testimony.createdAt.getFullYear()}
                  </small>
                </p>

                { /*Show edit and delete button only if admin*/ }
                {isAdmin ?
                  <div className="controls row">
                  <button
                    className="btn btn-outline-warning col"
                    data-toggle="modal"
                    data-target="#myModal"
                    type="button"
                    style={buttonStyle}
                    onClick={() => this.handleEdit(testimony._id)}
                  >
                    Edit Testimony
                  </button>

                  <button
                    className="btn btn-outline-danger col"
                    style={buttonStyle}
                    onClick={() => this.handleDelete(testimony._id)}
                  >
                    Delete Testimony
                  </button> 
                </div> : ''}
              </div>
                
            </div>
          )) : ''
        }

        
      </div>
    );
  }
}

export default withTracker(() => {
  //First set up subscription
  Meteor.subscribe('testimonies');

  //Return an object. Whatever we return will be sent to 
  //TestimonyList as props
  return {
  	//Sort by newest to oldest
    testimonies: Testimonies.find({}, {sort: {createdAt: -1}}).fetch(), 
    currentUser: Meteor.user()
  }
})(TestimonyList);
