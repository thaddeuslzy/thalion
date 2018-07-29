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

				<div className = "jumbotron aboutback">
				  <h2 className = "homehead" > ABOUT US </h2>

				  <hr className = "gradient" />
				  
				  <p className = "homebody">
				   The Office for Young People reaches out to young people aged between 16 (post-confirmation) to 35 years, including those in local universities, tertiary institutions, and young working adults in non-parish based communities. It is an exciting time for us as we connect with them, discerning new areas and new ways of meeting their needs for ministry and pastoral care, through running retreats, etc as well as journeying and one-on-one ministry. Our hearts desire is to facilitate their encounter with Jesus Christ, drawing them into greater communion as the Church and harnessing their energy for Gods Kingdom. </p>

				</div>

				<div className ="row">
				  <div className ="col-sm-12">
				      <div className ="caption">

				        <h2 className = "text-center">Our Work</h2>
				        <p className = "text-center"> We build and strengthen relationships with the various non-parish based young adult communities, as well as make new connections and journey with young working adults as we seek to minister to their needs. </p>


				        <div className="row">

				         <div className="profile">
    							<div className="col-sm-4">
      							<h3>Events & Retreats</h3><br/>
      							<img src="https://i.imgur.com/gJa1igU.png" class="img-circle person" alt="Random Name"/>
    							</div>

    							<div className="col-sm-4">
      							<h3>Tertiary Ministry</h3><br/>
      							<img src="https://i.imgur.com/bq1lvVu.png" class="img-circle person" alt="Random Name"/>
    							</div>

    							<div className="col-sm-4">
	      						<h3>Parish Ministry</h3><br/>
	      						<img src="https://i.imgur.com/gG1n8vL.png" class="img-circle person" alt="Random Name"/>
    							</div>
    					   </div>
  							</div>		

				      </div>
				    </div>
				</div>

				<hr className  = "gradient" />

				<div className = "row">
				  <div className = "col-sm-12">
				     <div className = "caption">
				        
				        <h2 class = "text-center">Our Team</h2>
				        <p class = "captionmain" > Meet our fellow brothers and sisters! </p>
				        
				        <div class="row">
				         <div class="profile">

    							<div class="col-sm-4">
      							<h3>Juliana Aloysius</h3><br/>
      							<img src="https://i.imgur.com/PxwCPJc.png?1" class="img-circle person" alt="Random Name"/>
    							</div>

    							<div class="col-sm-4">
      							<h3>Fr. Jude</h3><br/>
      							<img src="https://i.imgur.com/t2snSYA.png?1" class="img-circle person" alt="Random Name"/>
    							</div>

    							<div class="col-sm-4">
	      						<h3>Fr. Brian</h3><br/>
	      						<img src="https://i.imgur.com/LOssse3.jpg?1" class="img-circle person" alt="Random Name"/>
    							</div>
    					</div>
  						</div>		     
				    </div>
				</div>
		</div>

		<hr className  = "gradient" />

				<div className = "row">
				  <div className="col-sm-12">
				      <div className="caption">
				        
				        <h2 className = "text-center"> Get in Touch</h2>
				        <p className = "text-center"> Any questions? Feel free to contact us! </p>

				      </div>
				    </div>
				</div>

			<div class = "row">
				  <div class = "col-sm-12">
				     <div class = "caption">
				        
				        <div class="row">
				         <div class="profile">

    							<div class="col-sm-4">
      							<h4>General Enquiries</h4>
      							<p class = "homebody"><br/>
      							Tel: 6285 2571| 6286 0341<br/><br/>
      							For general enquiries, please email us at:<br/>
      							info.oyp@catholic.org.sg<br/><br/>
      							Opening Hours<br/>
      							Weekdays: 9:00am to 6:00pm
      							</p>
    							</div>

    							<div class="col-sm-4">
      							<h4>Retreat Bookings</h4>
      							<p class = "homebody"><br/>
      							For booking enquiries, please email Us at:<br/>
      							admin.oyp@catholic.org.sg<br/><br/>
      							Bookings can be made on Mondays, Thursdays and Fridays. Please note, the office does not operate on weekends.
      							</p>
    							</div>

    							<div class="col-sm-4">
	      						<h4>Visit Us</h4>
	      						<p class = "homebody"><br/>
	      						Office for Young People<br/><br/>
	      						2 Lorong Low Koon, Singapore 536449<br/><br/>
	      						Opening Hours<br/>
	      						Weekdays: 9am – 6pm
	      						</p>
    							</div>
    					   </div>
  							</div>		     
				    </div>
				</div>
		</div>

			</div>
		);
	}	
}

export default AboutPage;