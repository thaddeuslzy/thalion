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

				<div class = "jumbotron">
				  <h2 class = "homehead" > ABOUT US </h2>

				  <hr class = "gradient" />
				  
				  <p class = "homebody">
				   The Office for Young People reaches out to young people aged between 16 (post-confirmation) to 35 years, including those in local universities, tertiary institutions, and young working adults in non-parish based communities. It is an exciting time for us as we connect with them, discerning new areas and new ways of meeting their needs for ministry and pastoral care, through running retreats, etc as well as journeying and one-on-one ministry. Our hearts desire is to facilitate their encounter with Jesus Christ, drawing them into greater communion as the Church and harnessing their energy for Gods Kingdom. </p>

				</div>

				<div class ="row">
				  <div class ="col-sm-12">
				      <div class ="caption">
				        
				        <h2 class = "text-center">Our Work</h2>
				        <p class = "text-center"> We build and strengthen relationships with the various non -parish based young adult communities, as well as make new connections and journey with young working adults as we seek to minister to their needs. </p>

				        <div class="row">

				         <div class="profile">
    							<div class="col-sm-4">
      							<h3>Events & Retreats</h3><br/>
      							<img src="bandmember.jpg" alt="Random Name"/>
    							</div>

    							<div class="col-sm-4">
      							<h3>Tertiary Ministry</h3><br/>
      							<img src="bandmember.jpg" alt="Random Name"/>
    							</div>

    							<div class="col-sm-4">
	      						<h3>Parish Ministry</h3><br/>
	      						<img src="bandmember.jpg" alt="Random Name"/>
    							</div>
    					   </div>
  							</div>		

				        <p class = "text-center"> <a href="#" class="btn btn-default" role="button">Find Out More</a></p>
				      </div>
				    </div>
				</div>

				<hr class  = "gradient" />

				<div class = "row">
				  <div class = "col-sm-12">
				     <div class = "caption">
				        
				        <h2 class = "text-center">Our Team</h2>
				        <p class = "text-center" > Meet our fellow brothers and sisters! </p>
				        
				        <div class="row">
				         <div class="profile">
    							<div class="col-sm-4">
      							<p><strong>Name</strong></p><br/>
      							<img src="bandmember.jpg" alt="Random Name"/>
    							</div>

    							<div class="col-sm-4">
      							<p><strong>Name</strong></p><br/>
      							<img src="bandmember.jpg" alt="Random Name"/>
    							</div>

    							<div class="col-sm-4">
	      						<p><strong>Name</strong></p><br/>
	      						<img src="bandmember.jpg" alt="Random Name"/>
    							</div>
    					   </div>
  							</div>		     
				    </div>
				</div>
		</div>

		<hr class  = "gradient" />

				<div class = "row">
				  <div class="col-sm-12">
				      <div class="caption">
				        
				        <h2 class = "text-center"> Get in Touch</h2>
				        <p class = "text-center"> Any questions? Feel free to contact us! </p>
				        <p> <a href="#" class="btn btn-default" role="button">Find Out More</a></p>

				      </div>
				    </div>
				</div>


			</div>
		);
	}	
}

export default AboutPage;