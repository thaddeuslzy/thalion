import { Meteor } from 'meteor/meteor';
import "/imports/api/events.js"; //need to import the collections on server side
import '/imports/api/articles.js';
import '/imports/api/testimonies.js';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  //Create the admin user!
  if(Meteor.users.find().count() < 1) {
		let userId = Accounts.createUser({
	  	username: 'adminUser1',
	  	password: 'p@ssword2easy'
	  });
  	Roles.addUsersToRoles(userId, 'admin');
  }
});
