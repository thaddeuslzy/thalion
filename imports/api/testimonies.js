import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/meteor';
import ReactDOM from 'react-dom';

export const Testimonies = new Mongo.Collection('testimonies');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('testimonies', function tasksPublication() {
    //return testimonies.find({}, { limit:20}); //publishes only the first 20 testimonies
    return Testimonies.find(); //returns a cursor
  });
}

Meteor.methods({
	'testimonies.insert'(title, author, description) {
		//Make sure user is logged in before inserting a task
		if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Testimonies.insert({
    	title,
    	author,
    	description,
    	createdAt: new Date(),
    	mainImage: '',
    	content: ''
    })
	},

	'testimonies.update'(testimonyId, title, author, description) {
		Testimonies.update(testimonyId, {
      $set: {
        title,
        author,
        description
      }
    });
	},

	'testimonies.updateContent'(testimonyId, content) {
		Testimonies.update(testimonyId, {
			$set: {content}
		})
	},
	
	'testimonies.updateImage'(testimonyId, mainImage) {
		Testimonies.update(testimonyId, {
			$set: {mainImage}
		})
	},

	'testimonies.remove'(testimonyId) {
		//check(eventId, String);
		Testimonies.remove(testimonyId);
	}
});