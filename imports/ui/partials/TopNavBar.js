//This is the top nav bar for all pages
import React, { Component } from 'react';
import AccountsUIWrapper from '/imports/ui/AccountsUIWrapper.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

class TopNavBar extends Component {

	render() {
		return (
		  	<nav class="navbar navbar-default navbar-fixed-top">
			  <div class="container-fluid">
			    {/* Brand and toggle get grouped for better mobile display */}
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" onClick={() => FlowRouter.go('/')}>Office For Young People</a>
			    </div>

			    {/*Collect the nav links, forms, and other content for toggling*/}
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav">
			        
			        <li><a onClick={() => FlowRouter.go('/about')}>About Us</a></li>
			        <li><a onClick={() => FlowRouter.go('/events')}>Events</a></li>
			        
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Soul Food<span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a href="#">Articles</a></li>
			            <li><a href="#">OYP Bulletin</a></li>
			            <li><a href="#">Testimonies</a></li>
			            <li><a href="#">Recommended Resources</a></li>
			            <li><a href="#">Videos</a></li>
			          </ul>
			        </li>

			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OYP Family<span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a href="#">Come As You Are</a></li>
			            <li><a href="#">Polytechnic Communities</a></li>
			            <li><a href="#">University Communities</a></li>
			            <li><a href="#">Working Adult Communities</a></li>
			            <li><a href="#">Vinea Domini</a></li>
			          </ul>
			        </li>

			        <li><a href="#">Prayers</a></li>
			      </ul>
			      
			      <ul class="nav navbar-nav navbar-right">
			      	<li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account<span class="caret"></span></a>
			          <ul class="dropdown-menu">
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