import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';

class HomePage extends Component {
	render() {
		return (
			<div>
				<HelmetProvider>
					<Helmet>
						<title>OYP</title>
					</Helmet>
				</HelmetProvider>

				<TopNavBar />
				
				<div className="jumbotron">
				  <h2>OFFICE FOR YOUNG PEOPLE: RAISING UP A GENERATION FOR CHRIST</h2>
				  
				  <p>The Office for Young People seeks to raise up a generation of young people passionately in 
				  love with Jesus and His Church and committed to a lifestyle of discipleship and communion. 
				  We hope that you'll make yourself at home here and explore. Don't be a stranger and do
				  check back for news on our upcoming events, encouraging testimonies and more!</p>
				</div>

				<div className="row">
				  <div className="col-sm-6 col-md-4">
				    <div className="thumbnail">
				      
				      <div className="caption">
				        <h3>Latest Events</h3>
				        <p>...</p>
				        <p><a href="#" className="btn btn-primary" role="button">Find Out More</a></p>
				      </div>
				    </div>
				  </div>

				  <div className="col-sm-6 col-md-4">
				    <div className="thumbnail">
				      
				      <div className="caption">
				        <h3>Latest Feed</h3>
				        <p>...</p>
				     
				      </div>
				    </div>
				  </div>

				  <div className="col-sm-6 col-md-4">
				    <div className="thumbnail">
				      
				      <div className="caption">
				        <h3>Get Connected</h3>
				        <p>...</p>
				        <p> <a href="#" className="btn btn-default" role="button">Find Out More</a></p>
				      </div>
				    </div>
				  </div>

				</div>
			</div>
		);
	}	
}

export default HomePage;