import React, { Component } from 'react';
import TopNavBar from '/imports/ui/partials/TopNavBar.js';
import Helmet, { HelmetProvider } from 'react-helmet-async';

class FamilyPage extends Component {
	render() {
		return (
			<div>
				<HelmetProvider>
					<Helmet>
						<title>Our OYP Family</title>
					</Helmet>
				</HelmetProvider>
				<TopNavBar />

				<div class = "jumbotron familyback">
				  <h2 class = "homehead" > The OYP Family </h2>

				  <hr class = "gradient" />
				  
				  <p class = "homebody">
				   We began as strangers, that have now grown in friendship, and are now growing in faith and as one big family. It is amazing how Faith constantly gathers us together, and we pray that we continue to grow as one united heart as the Lord leads us. To find out more about our communities, read on! </p>

				</div>

				<div class ="row">
				  <div class ="col-sm-12">
				      <div class ="caption">
				        
				        <h3 class = "text-center">Come As You Are </h3>

				        <p class = "captionmain"> Seeking to cultivate a closer relationship with God and a community to walk with during this time of uncertainty? Been stagnant in your prayer life, and want to reignite your faith with a group of like-minded young people? Come as you are to our weekly gatherings to find out more! Share your stories, your struggles and joys, pray and worship together as a community. </p>

				        <img class = "familyimg" src="https://i.imgur.com/Mhlz9lh.png" alt="Random Name"/>

				        <h5 class = "text-center"> Date:Every Saturday <br/> Time: 10am to 12pm <br/> Venue: Office for Young People </h5>

				        {/* <p class = "text-center"> <a href="#" class="btn btn-default" role="button">Find Out More</a></p> */}
				      </div>
				    </div>
				</div>

				<hr class  = "gradient" />

				<div class = "row">
				  <div class = "col-sm-12">
				     <div class = "caption">
				        
				        <h3 class = "text-center">Polytechnic Communities</h3>

				        <p class = "captionmain" > It has been a labour of love, working with the various Catholic communities across the five polytechnics in Singapore. We encourage and support them in their mission on campus and accompany the students in discovering and deepening their faith.  Please read on for more on our formation programs for our poly students. Please read on for more on our formation programs for our poly students.</p>

				        <img class = "familyimg" src="https://i.imgur.com/SXd1zzg.jpg" alt="Random Name"/>

				        <p class = "captionmain"> If you are currently a polytechnic student and would like to get connected, do get in touch with us: </p>

				        <h5 class = "text-center"> Tel: 6285 2571 <br/> email: poly.oyp@catholic.org.sg </h5>

				        {/* <p class = "text-center"> <a href="#" class="btn btn-default" role="button">Find Out More</a></p> */}
				          
				    </div>
					</div>
			</div>

		<hr class  = "gradient"/>

				<div class = "row">
				  <div class="col-sm-12">
				      <div class="caption">
				        
				        <h3 class = "text-center"> University Communities</h3>

				        <p class = "captionmain"> We are working to form and deepen connections with the various Catholic communities across the eight local universities in Singapore and encourage and support them in their mission on campus. (NUS, NTU, SIM, SMU, SIT, SUTD, JCU and Yale-NUS). As we journey with them , we are learning more about their personal pastoral needs and how to meet them. </p>

				        <div class="row">

				         <div class="profile">

    							<div class="col-sm-3">
      							<h3>NUS</h3><br/>
      							<img class = "school" src="https://i.imgur.com/oTLifOw.png" alt="Random Name"/>
    							</div>

    							<div class="col-sm-3">
	      						<h3>Yale-NUS</h3><br/>
	      						<img class = "school" src="https://i.imgur.com/CpbmRFa.png" alt="Random Name"/>
    							</div>

    							<div class="col-sm-3">
	      						<h3>NTU</h3><br/>
	      						<img class = "school" src="https://i.imgur.com/9fjHUwr.png" alt="Random Name"/>
    							</div>

    							<div class="col-sm-3">
      							<h3>SMU</h3><br/>
      							<img class = "school" src="https://i.imgur.com/qh35ctq.png " alt="Random Name"/>
    							</div>

    					   </div>
  							</div>		


  						<div class="row">

				         <div class="profile">
    							<div class="col-sm-3">
      							<h3>SUTD</h3><br/>
      							<img class = "school" src="https://i.imgur.com/AdIETCT.png" alt="Random Name"/>
    							</div>

    							<div class="col-sm-3">
      							<h3>SIM</h3><br/>
      							<img class = "school" src="https://i.imgur.com/9A6QZxH.png" alt="Random Name"/>
    							</div>

    							<div class="col-sm-3">
	      						<h3>SIT</h3><br/>
	      						<img class = "school" src="https://i.imgur.com/89LrhgK.png" alt="Random Name"/>
    							</div>

    							<div class="col-sm-3">
	      						<h3>JCU</h3><br/>
	      						<img class = "school" src="https://i.imgur.com/DDwUFdK.png" alt="Random Name"/>
    							</div>
    							
    					   </div>
  							</div>		

				        {/* <p class = "text-center"> <a href="#" class="btn btn-default" role="button">Find Out More</a></p> */}

				      </div>
				    </div>
				</div>

								<hr class  = "gradient" />

				<div class = "row">
				  <div class="col-sm-12">
				      <div class="caption">
				        
				        <h3 class = "text-center"> Working Adult Communities</h3>

				        <p class = "captionmain"> We build and strengthen relationships with the various non-parish based young adult communities as well as make new connections and journey with young working adults as we seek to minister to their needs.It is not easy to sustain our faith lives alone as we work. At OYP, we desire to build communities - a Christ-centred space where we follow Him together.<br/><br/>

									It is a life of sharing in joys and sorrows, of how God’s love and plan for us unfolds in our own stories. It is a life of prayer, discovering Jesus’ presence and listening to His voice. It is a life of mission to reach out and gather our fellow brothers and sisters, that they too may encounter Him.<br/><br/>

									At the centre of these elements is a call to become more like Jesus, to put on the face of Christ and to lay down our lives, that others may live. It is in this mutual giving and receiving of love that we discover the fruits of community - a joy, peace, unity, a greater sense of Church. </p>

				        <img class = "familyimg" src="https://i.imgur.com/AjjPmzd.jpg" alt="Random Name"/>

				      </div>
				    </div>
				</div>

								<hr class  = "gradient" />

				<div class = "row">
				  <div class="col-sm-12">
				      <div class="caption">
				        
				        <h3 class = "text-center"> Vinnea Domini</h3>		        

				        <p class = "captionmain"> We are a community of professional Catholic parish-based youth workers from across the diocese along with youth coordinators from the Office for Young People. We meet once a month to share our lives and pray </p>

				        <img class = "familyimg" src="https://i.imgur.com/7Na7ri3.jpg" alt="Random Name"/>

				        {/*<p class = "text-center"> <a href="#" class="btn btn-default" role="button">Find Out More</a></p> */}

				      </div>
				    </div>
				</div>


			</div>
		);
	}	
}

export default FamilyPage;