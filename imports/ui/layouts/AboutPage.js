import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';

class AboutPage extends Component {
	render() {
    console.log(Meteor.userId());
		
		return (
			<div>
				<TopNavBar />
			</div>
		);
	}	
}

export default AboutPage;