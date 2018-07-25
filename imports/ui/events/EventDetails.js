//This is a dynamic events page
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import { Events } from "/imports/api/events.js";
import { FlowRouter } from 'meteor/kadira:flow-router';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import EventEditor from '/imports/ui/events/EventEditor.js';
import NotFound from '/imports/ui/layouts/NotFound.js'
import { Roles } from 'meteor/alanning:roles';

class EventDetails extends Component {
	//componentWillMount --> a lifecycle method; eg to declare a starting variable when the component mounts
	render() {
		let isAdmin = Roles.userIsInRole(this.props.currentUser, 'admin');
		//To fix the async problem for this.props.event
		//Add a check, to see if the event is loaded first
		if(!this.props.event) {
			return (
				<div>
					<NotFound />
				</div>
			);
		}
		return (
			<div>
				<HelmetProvider>
          <Helmet>
            <title>{this.props.event.title}</title>
          </Helmet>
        </HelmetProvider>
				<TopNavBar />
				<h1 style={{ margin: "50px 0px" }}>
					{this.props.event.title}
				</h1>
				{isAdmin ? 
				<EventEditor event={this.props.event}/> 
				: ''}

				<div>
					<div dangerouslySetInnerHTML={{__html: this.props.event.content }}></div>
				</div>
			</div>
		);
	}
}

export default withTracker(() => {
  //Or...this.props.params.id
  let eventId = FlowRouter.getParam('id');
  //First subscribe based on id
  Meteor.subscribe('events');
  return {
    event: Events.findOne(eventId),
    currentUser: Meteor.user()
  }
})(EventDetails);