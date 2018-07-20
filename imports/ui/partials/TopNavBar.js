//This is the top nav bar for all pages
import React, { Component } from 'react';
import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

class TopNavBar extends Component {
	onAccountClick(event) {
		//Prevents the browser from trying to navigate to that link, when it is clicked
		event.preventDefault();
	}
	
	render() {
		return (
		  	<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
			    {/* Brand and toggle get grouped for better mobile display */}
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" onClick={() => FlowRouter.go('/')}>Office For Young People</a>
			    </div>

			    {/*Collect the nav links, forms, and other content for toggling*/}
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        
			        <li><a onClick={() => FlowRouter.go('/about')}>About Us</a></li>
			        <li><a onClick={() => FlowRouter.go('/events')}>Events</a></li>
			        
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Soul Food<span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Articles</a></li>
			            <li><a href="#">OYP Bulletin</a></li>
			            <li><a href="#">Testimonies</a></li>
			            <li><a href="#">Recommended Resources</a></li>
			            <li><a href="#">Videos</a></li>
			          </ul>
			        </li>

			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OYP Family<span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Come As You Are</a></li>
			            <li><a href="#">Polytechnic Communities</a></li>
			            <li><a href="#">University Communities</a></li>
			            <li><a href="#">Working Adult Communities</a></li>
			            <li><a href="#">Vinea Domini</a></li>
			          </ul>
			        </li>

			        <li><a href="#">Prayers</a></li>
			      </ul>
			      
			      <ul className="nav navbar-nav navbar-right">
			      	<li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account<span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><AccountsUIWrapper /></li>
			          </ul>
			        </li>    
			      </ul>	

			    </div> {/* /.navbar-collapse */}
				
			  </div> {/*/.container-fluid*/}

			</nav>
				
  		);
	}
}

export default TopNavBar;