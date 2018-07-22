import React from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';

const NotFound = () => {
	return (
		<div className="NotFound">
			<TopNavBar />
			<div style={{ margin: "50px 0px"}}>
				Sorry, the page you have entered does not exist!
			</div>
		</div>
	);
};

export default NotFound;