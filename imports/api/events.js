import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/meteor';
import ReactDOM from 'react-dom';

//Can put this in collections folder also...

// Creates a new Mongo collection and exports it (export vs export default)
// A collection is an array of objects; each object has a variety of properties which describe the particular event
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('events', function tasksPublication() {
    //return Events.find({}, { limit:20}); //publishes only the first 20 events
    return Events.find(); //returns a cursor
  });
}

//Other possible properties to add: 
//createdAt --> to sort events according to created time
//ownerID --> ID of the user who created this event
//sharedWith --> array of emails of people who have access to this event
//content--> this would be the React Quill content from Event Details (lecture 101)

//Accessible to both client and server
Meteor.methods({
	'events.insert'(title, description, date) {
		/*check(title, String);
		check(description, String);
		check(date, String);*/

		//Make sure user is logged in before inserting a task
		if (! this.userId) {
      		throw new Meteor.Error('not-authorized');
    }
		
		Events.insert({
	    title,
	    description,
	    date,
	    content: '' 
    });
	},
	
	'events.update'(eventId, title, description, date) {
		/*check(eventId, String);
		check(title, String);
		check(description, String);
		check(date, String);*/
		Events.update(eventId, {
        $set: {
          title,
          description,
          date
        }
        //A meteor modifier
      });
	},

	//Called in EventEditor
	'events.updateContent'(eventId, content) {
		Events.update(eventId, {
			$set: {content}
		})
	},

	'events.remove'(eventId) {
		//check(eventId, String);
		Events.remove(eventId);
	}

	/*
	'events.setPrivate'(eventId, setToPrivate) {
		//check(eventId, String);
	    //check(setToPrivate, Boolean);
	 
	    const event = Events.findOne(eventId);
	 
	    // Make sure only the task owner can make a task private
	    if (event.owner !== this.userId) {
	      throw new Meteor.Error('not-authorized');
	    }
	 
	    Events.update(taskId, { $set: { private: setToPrivate } });
	}*/
});