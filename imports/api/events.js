import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/meteor';

//// Creates a new Mongo collection and exports it
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('events', function tasksPublication() {
    return Events.find();
  });
}

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
	        date
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
      });
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