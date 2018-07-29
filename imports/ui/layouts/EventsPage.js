import React, { Component } from "react";
import AddEvent from "/imports/ui/events/AddEvent.js";
import ListEvents from "/imports/ui/events/ListEvents.js";
import { Events } from "/imports/api/events.js";
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import { Meteor } from 'meteor/meteor';

class EventsPage extends Component {
  constructor(props) {
    //No props here... This is the parent component of Events
    super(props);
    this.state = {
      isUpdating: false,
      event: {}
    }
  }

  handleEdit = (eventId) => {
    // find the event that requires editing
    const event = Events.findOne({_id: eventId});

    // set it into state also sets a flag `isUpdating` that will allow us to have a dynamic form on AddEvent component
    this.setState({
      event,
      isUpdating: true
    })
  }

  //Only enable AddEvent / edit / delete for admin user lionelat
  //Use the package alanning:roles

  render() {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Events</title>
          </Helmet>
        </HelmetProvider>

        {/*We pass down the event and isUpdating flag as props in the AddEvent component*/}
        <TopNavBar />

        <div class = "jumbotron eventback">
          <h2 class = "homehead" > EVENTS </h2>

          <hr class = "gradient" />
          
          <p class = "homebody">
           The Office for Young People reaches out to young people aged between 16 (post-confirmation) to 35 years, including those in local universities, tertiary institutions, and young working adults in non-parish based communities. It is an exciting time for us as we connect with them, discerning new areas and new ways of meeting their needs for ministry and pastoral care, through running retreats, etc as well as journeying and one-on-one ministry. Our hearts desire is to facilitate their encounter with Jesus Christ, drawing them into greater communion as the Church and harnessing their energy for Gods Kingdom. </p>

        </div>

        
        <AddEvent
          event={this.state.event}
          isUpdating={this.state.isUpdating}
        />

        {/*
          we have the pre tags to view contents of db just for verification
          <pre>DB Stuff: {JSON.stringify(this.props, null, " ")} </pre>
        */}
        <ListEvents handleEdit={this.handleEdit} />

      </div>
    );
  }
}

export default EventsPage;