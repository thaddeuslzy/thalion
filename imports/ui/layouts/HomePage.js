import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';

// import Script1 from 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
// import Script2 from 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';


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
				
				<div className="jumbotron homeback">
				  <h2 class = "homehead">OFFICE FOR YOUNG PEOPLE: RAISING UP A GENERATION FOR CHRIST</h2>

				  <hr className = "gradient" />

				  <p className = "homebody" > The Office for Young People seeks to raise up a generation of young people passionately in 
				  love with Jesus and His Church and committed to a lifestyle of discipleship and communion. 
				  We hope that you'll make yourself at home here and explore. Don't be a stranger and do
				  check back for news on our upcoming events, encouraging testimonies and more! </p>
			</div>

			{/* Start of Carousel */}

			<div id="myCarousel" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    	<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			    	<li data-target="#myCarousel" data-slide-to="1"></li>
			    	<li data-target="#myCarousel" data-slide-to="2"></li>
			    	<li data-target="#myCarousel" data-slide-to="3"></li>
			  </ol>

			  <div class="carousel-inner" role="listbox">

			    <div class="item active">
			      <img src='https://i.imgur.com/MBmoerR.png' alt="Encounter"/>
			      <div class="carousel-caption">
			        <p>Encounter God.</p>
			      </div> 
			    </div>

			    <div class="item">
			      <img src="https://i.imgur.com/xcbu7MK.png" alt="Discipleship"/>
			      <div class="carousel-caption">
			        <p>A life of Discipleship.</p>
			      </div> 
			    </div>

			    <div class="item">
			      <img src="https://i.imgur.com/1BS4wFX.png" alt="Communion"/>
			      <div class="carousel-caption">
			        <p>In Communion.</p>
			      </div> 
			    </div>

			    <div class="item">
			      <img src="https://i.imgur.com/e46eLK8.png" alt="Mission"/>
			      <div class="carousel-caption">
			        <p>Live the Mission.</p>
			      </div> 
			    </div>

			  </div>


			  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
			
			{/* End of Carousel */}

				<div className="row">

				  <div className="col-sm-6 ">
				    <div className="thumbnail">
				      <div className="caption">
				        <h3>Our Activities</h3>

				        <p className = "captionbody" >OYP hosts a range of activities every month, ranging from Retreats, Leadership Camps, Day of Recollections, Nox Gaudii, as well as Orientation Camps for University!</p>
				        
				        <p className = "text-center"> <a href="/events" class="btn btn-default" role="button">See More</a></p>
				      </div>
				    </div>
				  </div>

				  <div className="col-sm-6">
				    <div className="thumbnail">
				      <div className="caption">
				        <h3>Latest Feed</h3>

				        <p className = "captionbody">Our website hosts a range of resources for catholics</p>
				        
				        <p class = "text-center"> <a href="/articles" class="btn btn-default" role="button">See More</a></p>

				      </div>
				    </div>
				  </div>

				</div>

				<img src="https://i.imgur.com/Lg4gyRx.png" className = "bottom-banner" alt="Random Name"/>

			</div>


		);
	}	
}

export default HomePage;