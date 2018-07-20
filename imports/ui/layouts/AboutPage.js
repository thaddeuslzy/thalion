import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';

class AboutPage extends Component {
	render() {
		return (
			<div>
				<HelmetProvider>
					<Helmet>
						<title>About Us</title>
					</Helmet>
				</HelmetProvider>
				<TopNavBar />
			</div>
		);
	}	
}

export default AboutPage;