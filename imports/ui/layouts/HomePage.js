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
				
				<div className="jumbotron">
				  <h2>OFFICE FOR YOUNG PEOPLE: RAISING UP A GENERATION FOR CHRIST</h2>

				  <hr class = "gradient" />

				  <p class = "homebody" > The Office for Young People seeks to raise up a generation of young people passionately in 
				  love with Jesus and His Church and committed to a lifestyle of discipleship and communion. 
				  We hope that you'll make yourself at home here and explore. Don't be a stranger and do
				  check back for news on our upcoming events, encouraging testimonies and more! </p>
			</div>

			{/* Start of Carousel

			<div id="myCarousel" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    	<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			    	<li data-target="#myCarousel" data-slide-to="1"></li>
			    	<li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>


			  <div class="carousel-inner" role="listbox">
			    <div class="item active">
			      <img src='/images/background1.jpg' alt="New York"/>
			      <div class="carousel-caption">
			        <h3>New York</h3>
			        <p>The atmosphere in New York is lorem ipsum.</p>
			      </div> 
			    </div>

			    <div class="item">
			      <img src="chicago.jpg" alt="Chicago"/>
			      <div class="carousel-caption">
			        <h3>Chicago</h3>
			        <p>Thank you, Chicago - A night we won't forget.</p>
			      </div> 
			    </div>

			    <div class="item">
			      <img src="la.jpg" alt="Los Angeles"/>
			      <div class="carousel-caption">
			        <h3>LA</h3>
			        <p>Even though the traffic was a mess, we had the best time.</p>
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
			End of Carousel */}

				<div class="row">

				  <div class="col-sm-6 ">
				    <div class="thumbnail">
				      <div class="caption">
				        <h3>Our Activities</h3>

				        <p class = "captionbody" >OYP hosts a range of activities every month, ranging from Retreats, Leadership Camps, Day of Recollections, Nox Gaudii, as well as Orientation Camps for University!</p>
				        <p class = "text-center"> <a href="#" class="btn btn-default" role="button">See More</a></p>
				      </div>
				    </div>
				  </div>

				  <div class="col-sm-6">
				    <div class="thumbnail">
				      <div class="caption">
				        <h3>Latest Feed</h3>
				        <p class = "captionbody">Our website hosts a range of resources for catholics</p>
				        <p class = "text-center"> <a href="#" class="btn btn-default" role="button">See More</a></p>
				      </div>
				    </div>
				  </div>

				</div>

				<div class="row">

				  <div class="col-sm-6 ">
				    <div class="thumbnail">
				      <div class="caption">
				        <h3>Media</h3>
				        <p class = "captionbody">...</p>
				        <p class = "text-center"> <a href="#" class="btn btn-default" role="button">See More</a></p>
				      </div>
				    </div>
				  </div>

				  <div class="col-sm-6">
				    <div class="thumbnail">
				      <div class="caption">
				        <h3>Support Us!</h3>
				        <p class = "captionbody">...</p>
				        <p class = "text-center"> <a href="#" class="btn btn-default" role="button">I Would Like to Support!</a></p>
				      </div>
				    </div>
				  </div>

				</div>

			</div>

		);
	}	
}

export default HomePage;