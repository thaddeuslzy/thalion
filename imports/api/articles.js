import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/meteor';
import ReactDOM from 'react-dom';

export const Articles = new Mongo.Collection('articles');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('articles', function tasksPublication() {
    //return Articles.find({}, { limit:20}); //publishes only the first 20 articles
    return Articles.find(); //returns a cursor
  });
}

Meteor.methods({
	'articles.insert'(title, author, description) {
		//Make sure user is logged in before inserting a task
		if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Articles.insert({
    	title,
    	author,
    	description,
    	createdAt: new Date(),
    	mainImage: '',
    	content: ''
    })
	},

	'articles.update'(articleId, title, author, description) {
		Articles.update(articleId, {
      $set: {
        title,
        author,
        description
      }
    });
	},

	//articles.updateImage
	//articles.updateContent

	'articles.remove'(articleId) {
		//check(eventId, String);
		Articles.remove(articleId);
	}
});